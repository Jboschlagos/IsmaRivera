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

// Títulos dinámicos por página
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

  document.title = PAGE_TITLES[page] || "Isma Rivera | Poeta Cantor";

  try {
    const resp = await fetch(`/componentes/${page}.html`);
    if (!resp.ok) throw new Error(`Página no encontrada: ${page}`);
    contenido.innerHTML = await resp.text();

    window.scrollTo(0, 0);

    document.querySelectorAll(".nav-link[data-page]").forEach((link) => {
      link.classList.toggle("active", link.dataset.page === page);
    });

    if (page === "musica") {
      if (typeof renderAlbums === "function") renderAlbums();
      if (typeof renderVideos === "function") renderVideos();
    }
    if (page === "poesia" && typeof renderBooks === "function") renderBooks();
    if (page === "bio") setTimeout(initBioCarrusel, 0);

    bindLinks();

    const menu = document.querySelector("#navbarMenu");
    if (menu) menu.classList.remove("show");

    history.pushState({ page }, "", `#${page}`);
  } catch (err) {
    console.error(`[router] ${err.message}`);
  }
}

// ── CARRUSEL BIO ───────────────────────────────────────────────
function initBioCarrusel() {
  const track = document.getElementById("bio-carrusel-track");
  const dotsContainer = document.getElementById("bio-dots");
  if (!track || !dotsContainer) return;

  // Limpiar estado previo
  dotsContainer.innerHTML = "";
  track.style.transition = "none";

  const slidesOriginales = Array.from(
    track.querySelectorAll(".bio-carrusel-slide"),
  );
  const total = slidesOriginales.length;

  // Clonar primero y último para loop infinito
  const primerClon = slidesOriginales[0].cloneNode(true);
  const ultimoClon = slidesOriginales[total - 1].cloneNode(true);
  track.appendChild(primerClon);
  track.insertBefore(ultimoClon, slidesOriginales[0]);

  // Track queda: [clon-último | orig1 | orig2 | ... | origN | clon-primero]
  let actual = 1;
  track.style.transform = `translateX(-${actual * 100}%)`;

  // Crear dots solo para originales
  slidesOriginales.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "bio-carrusel-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", `Imagen ${i + 1}`);
    dot.addEventListener("click", () => ir(i + 1));
    dotsContainer.appendChild(dot);
  });

  function actualizarDots() {
    dotsContainer.querySelectorAll(".bio-carrusel-dot").forEach((d, i) => {
      d.classList.toggle("active", i === actual - 1);
    });
  }

  function ir(i) {
    actual = i;
    track.style.transition = "transform 0.45s ease";
    track.style.transform = `translateX(-${actual * 100}%)`;
    actualizarDots();
  }

  // Salto silencioso al terminar la transición
  track.addEventListener("transitionend", () => {
    if (actual === total + 1) {
      track.style.transition = "none";
      actual = 1;
      track.style.transform = `translateX(-${actual * 100}%)`;
    }
    if (actual === 0) {
      track.style.transition = "none";
      actual = total;
      track.style.transform = `translateX(-${actual * 100}%)`;
    }
  });

  // Reemplazar botones para eliminar listeners duplicados
  const prevBtn = document.getElementById("bio-prev");
  const nextBtn = document.getElementById("bio-next");

  if (prevBtn && nextBtn) {
    const newPrev = prevBtn.cloneNode(true);
    const newNext = nextBtn.cloneNode(true);
    prevBtn.replaceWith(newPrev);
    nextBtn.replaceWith(newNext);

    newPrev.addEventListener("click", () => ir(actual - 1));
    newNext.addEventListener("click", () => ir(actual + 1));
  }

  // Swipe táctil
  let startX = 0;
  track.addEventListener(
    "touchstart",
    (e) => {
      startX = e.touches[0].clientX;
    },
    { passive: true },
  );
  track.addEventListener("touchend", (e) => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) ir(actual + (diff > 0 ? 1 : -1));
  });
}

// ── Registrar clicks en links con data-page ────────────────────
function bindLinks() {
  document.querySelectorAll("[data-page]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const page = el.dataset.page;

      if (page === "contacto") {
        document
          .getElementById("contacto")
          ?.scrollIntoView({ behavior: "smooth" });
        return;
      }

      loadPage(page);
    });
  });
}

// ── Inicializar menú hamburguesa manualmente ───────────────────
function initHamburger() {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.querySelector("#navbarMenu");
  if (toggler && menu) {
    toggler.addEventListener("click", () => {
      menu.classList.toggle("show");
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
window.addEventListener("popstate", (e) => {
  const page = e.state?.page || "home";
  loadPage(page);
});
