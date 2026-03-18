/**
 * musica.js
 * Renderiza la grilla de discos desde data.js
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("albums-container");
  if (!container) return;

  const albums = window.ISMA_DATA?.albums || [];

  if (albums.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center opacity-50">
        <p>No hay discos disponibles por el momento.</p>
      </div>`;
    return;
  }

  albums.forEach(album => {
    container.innerHTML += createAlbumCard(album);
  });
});

function createAlbumCard(album) {
  const imagen = album.image
    ? `<img src="${album.image}" alt="${album.title}">`
    : `<div class="album-img-placeholder"></div>`;

  const descripcion = album.description
    ? `<p class="album-desc">${album.description}</p>`
    : "";

  const links = [];
  if (album.spotify) links.push(`<a href="${album.spotify}"  target="_blank" class="album-link">Spotify</a>`);
  if (album.bandcamp) links.push(`<a href="${album.bandcamp}" target="_blank" class="album-link">Bandcamp</a>`);

  const meta = links.length
    ? `<div class="album-links">${links.join("")}</div>`
    : "";

  return `
    <article class="col-12 col-md-6 col-lg-3">
      <div class="album-card">
        ${imagen}
        <div class="album-body">
          <h3>${album.title}</h3>
          <span class="album-year">${album.year}</span>
          ${descripcion}
          <div class="album-meta">${meta}</div>
        </div>
      </div>
    </article>`;
}