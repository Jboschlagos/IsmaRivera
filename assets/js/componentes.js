/**
 * componentes.js — Router SPA Isma Rivera
 *
 * Carga navbar y footer una sola vez.
 * Navega entre páginas cargando fragmentos HTML en #contenido
 * sin recargar el browser — el player nunca se interrumpe.
 *
 * MEJORAS FUTURAS:
 * - Agregar transiciones/animaciones entre páginas (fade in/out)
 * - Lazy loading de imágenes en cards
 * - Precarga de fragmentos al hacer hover en los links
 */

const PAGE_TITLES = {
    home: "Isma Rivera | Poeta Cantor",
    musica: "Música | Isma Rivera",
    poesia: "Poesía | Isma Rivera",
    bio: "Bio | Isma Rivera",
    prensa: "Prensa | Isma Rivera",
};

// ── Cargar componente estático ─────────────────────────────────
async function loadComponent(containerId, url) {
    const container = document.getElementById(containerId);
    if (!container) return;
    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`No se pudo cargar: ${url}`);
        container.innerHTML = await resp.text();
    } catch (err) {
        console.error(`[componentes.js] ${err.message}`);
    }
}

// ── Cargar página en #contenido ────────────────────────────────
async function loadPage(page) {
    const contenido = document.getElementById("contenido");
    if (!contenido) return;

    // Actualizar título de la pestaña
    document.title = PAGE_TITLES[page] || "Isma Rivera | Poeta Cantor";

    try {
        const resp = await fetch(`/componentes/${page}.html`);
        if (!resp.ok) throw new Error(`Página no encontrada: ${page}`);
        contenido.innerHTML = await resp.text();

        // Scroll al top
        window.scrollTo(0, 0);

        // Actualizar nav-link activo
        document.querySelectorAll(".nav-link[data-page]").forEach(link => {
            link.classList.toggle("active", link.dataset.page === page);
        });

        // Re-ejecutar JS de la página si corresponde
        if (page === "musica" && typeof renderAlbums === "function") renderAlbums();
        if (page === "poesia" && typeof renderBooks === "function") renderBooks();

        // Registrar clicks de la nueva página
        bindLinks();

        // Cerrar menú móvil si está abierto
        const menu = document.querySelector('#navbarMenu');
        if (menu) menu.classList.remove('show');

        // Actualizar URL sin recargar
        history.pushState({ page }, "", `#${page}`);

    } catch (err) {
        console.error(`[router] ${err.message}`);
    }
}

// ── Registrar clicks en links con data-page ────────────────────
function bindLinks() {
    document.querySelectorAll("[data-page]").forEach(el => {
        el.addEventListener("click", e => {
            e.preventDefault();
            const page = el.dataset.page;

            // Contacto hace scroll al footer en vez de cargar página
            if (page === "contacto") {
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                return;
            }

            loadPage(page);
        });
    });
}

// ── Inicializar menú hamburguesa manualmente ───────────────────
function initHamburger() {
    const toggler = document.querySelector('.navbar-toggler');
    const menu = document.querySelector('#navbarMenu');
    if (toggler && menu) {
        toggler.addEventListener('click', () => {
            menu.classList.toggle('show');
        });
    }
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar-container", "/componentes/navbar.html");

    initHamburger();

    await loadComponent("footer-container", "/componentes/footer.html");

    document.dispatchEvent(new CustomEvent("playerReady"));

    const page = location.hash.replace("#", "") || "home";
    await loadPage(page);

    bindLinks();
});

// ── Manejar botón atrás/adelante del browser ───────────────────
window.addEventListener("popstate", e => {
    const page = e.state?.page || "home";
    loadPage(page);
});