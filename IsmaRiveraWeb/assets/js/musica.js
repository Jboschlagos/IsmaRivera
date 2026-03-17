document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('albums-container');
  
  if (!container) return;

  // Obtener datos de discos
  const albums = window.ISMA_DATA?.albums || [];

  // Si no hay datos, mostrar mensaje
  if (albums.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center">
        <p class="text-muted">No hay discos disponibles en este momento.</p>
      </div>
    `;
    return;
  }

  // Renderizar cada disco
  albums.forEach(album => {
    const albumCard = createAlbumCard(album);
    container.innerHTML += albumCard;
  });
});

/**
 * Crea el HTML de una tarjeta de disco
 * @param {Object} album - Datos del disco
 * @returns {string} HTML de la tarjeta
 */
function createAlbumCard(album) {
  const hasLinks = album.spotify || album.bandcamp;
  
  return `
    <article class="col-12 col-md-6 col-lg-4">
      <div class="album-card">
        <img src="${album.image}" alt="${album.title}" 
             onerror="this.src='./assets/img/placeholder-album.jpg'">

        <div class="album-body">
          <h3>${album.title}</h3>
          <span class="album-year">${album.year}</span>
          <p class="album-desc">${album.description}</p>

          <div class="album-meta">
            ${hasLinks ? `
              <div class="album-links">
                ${album.spotify ? `
                  <a href="${album.spotify}" target="_blank" class="album-link">
                    ▶ Spotify
                  </a>
                ` : ''}
                ${album.bandcamp ? `
                  <a href="${album.bandcamp}" target="_blank" class="album-link">
                    ♪ Bandcamp
                  </a>
                ` : ''}
              </div>
            ` : `
              <span class="audio-soon">Enlaces próximamente</span>
            `}
          </div>
        </div>
      </div>
    </article>
  `;
}

// Manejo de errores en imágenes
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.src = './assets/img/placeholder-album.jpg';
  }
}, true);