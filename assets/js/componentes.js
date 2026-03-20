/**
 * componentes.js — Router SPA Isma Rivera
 *
 * Carga navbar y footer una sola vez.
 * Navega entre páginas cargando fragmentos HTML en #contenido
 * sin recargar el browser — el player nunca se interrumpe.
 */

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
            if (page === "contacto") {
                document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
                return;
            }
            loadPage(page);
        });
    });
}

// ── Init ───────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar-container", "/componentes/navbar.html");

    // Reinicializar Bootstrap para el navbar dinámico
    document.querySelectorAll('[data-bs-toggle="collapse"]').forEach(el => {
        new bootstrap.Collapse(el.getAttribute('data-bs-target'), { toggle: false });
    });

    await loadComponent("footer-container", "/componentes/footer.html");

    // El player vive en footer, avisamos que está listo
    document.dispatchEvent(new CustomEvent("playerReady"));

    // Cargar página inicial según hash o home por defecto
    const page = location.hash.replace("#", "") || "home";
    await loadPage(page);

    // Registrar links del navbar
    bindLinks();
});

// ── Manejar botón atrás/adelante del browser ───────────────────
window.addEventListener("popstate", e => {
    const page = e.state?.page || "home";
    loadPage(page);
});