// components.js - Componentes reutilizables del sitio
// IMPORTANTE: Este archivo depende de data.js, debe cargarse después

/**
 * Renderiza el navbar en el elemento especificado
 */
function renderNavbar(containerId = 'navbar-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const siteTitle = window.ISMA_DATA?.site?.title || 'Isma Rivera';

  const navbarHTML = `
    <nav class="navbar navbar-expand-lg navbar-dark bg-black fixed-top">
      <div class="container-fluid">
        <a class="navbar-brand" href="index.html">${siteTitle}</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMenu">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarMenu">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'bio.html' ? 'active' : ''}" href="bio.html">Bio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link ${currentPage === 'prensa.html' ? 'active' : ''}" href="prensa.html">Prensa</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="index.html#contacto">Contacto</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  `;

  container.innerHTML = navbarHTML;
}

/**
 * Renderiza el footer en el elemento especificado
 * Usa los datos de contacto centralizados en data.js
 */
function renderFooter(containerId = 'footer-container') {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Obtener datos de contacto desde data.js (sin duplicación)
  const contact = window.ISMA_DATA?.contact || {};
  
  // Valores por defecto solo si data.js no está cargado
  const email = contact.email || 'contacto@ismarivera.com';
  const whatsapp = contact.whatsapp || '56912345678';
  const instagram = contact.instagram || '#';
  const youtube = contact.youtube || '#';
  const bandcamp = contact.bandcamp || '#';
  const spotify = contact.spotify || '#';

  const footerHTML = `
    <footer id="contacto" class="footer bg-black text-white mt-5 py-4">
      <div class="container">
        <div class="row text-center text-md-start align-items-center">

          <!-- Contacto -->
          <div class="col-md-4 mb-3 mb-md-0">
            <h6 class="text-uppercase">Contacto</h6>
            <p class="mb-1">
              <a href="mailto:${email}" class="text-white text-decoration-none">
                ${email}
              </a>
            </p>
            <a href="https://wa.me/${whatsapp}" class="text-white text-decoration-none" target="_blank">
              WhatsApp
            </a>
          </div>

          <!-- Redes -->
          <div class="col-md-4 mb-3 mb-md-0 text-center">
            <h6 class="text-uppercase">Redes</h6>
            <a href="${instagram}" target="_blank" class="text-white me-3 text-decoration-none">Instagram</a>
            <a href="${youtube}" target="_blank" class="text-white me-3 text-decoration-none">YouTube</a>
            <a href="${bandcamp}" target="_blank" class="text-white text-decoration-none">Bandcamp</a>
          </div>

          <!-- Spotify -->
          <div class="col-md-4 text-md-end text-center">
            <h6 class="text-uppercase">Escuchar</h6>
            <a href="${spotify}" target="_blank" class="btn btn-outline-light btn-sm">Spotify</a>
          </div>

        </div>

        <hr class="border-secondary my-3">

        <div class="text-center small opacity-75">
          © ${new Date().getFullYear()} Isma Rivera – Poeta Cantor
        </div>
      </div>
    </footer>
  `;

  container.innerHTML = footerHTML;
}

/**
 * Inicializa todos los componentes cuando el DOM esté listo
 */
document.addEventListener('DOMContentLoaded', () => {
  renderNavbar();
  renderFooter();
});

// Exportar funciones para uso global
window.renderNavbar = renderNavbar;
window.renderFooter = renderFooter;