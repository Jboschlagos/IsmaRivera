/**
 * musica.js
 * Renderiza la grilla de discos y videos desde data.js.
 * El router llama a renderAlbums() y renderVideos() después de cargar el fragmento.
 */

// ── DISCOS ─────────────────────────────────────────────────────
function renderAlbums() {
  const container = document.getElementById("albums-container");
  if (!container) return;

  const albums = window.ISMA_DATA?.albums || [];

  if (albums.length === 0) {
    container.innerHTML = `<div class="col-12 text-center opacity-50"><p>No hay discos disponibles.</p></div>`;
    return;
  }

  container.innerHTML = albums.map((album, i) => {
    const imagen = album.image
      ? `<img src="${album.image}" alt="${album.title}" loading="lazy">`
      : `<div class="album-img-placeholder"></div>`;

    const descripcion = album.description
      ? `<p class="album-desc">${album.description}</p>`
      : "";

    const links = [];
    if (album.spotify) links.push(`<a href="${album.spotify}"  target="_blank" rel="noopener noreferrer" class="album-link">Spotify</a>`);
    if (album.bandcamp) links.push(`<a href="${album.bandcamp}" target="_blank" rel="noopener noreferrer" class="album-link">Bandcamp</a>`);

    // Botón tracklist solo si el disco tiene canciones
    const btnTracklist = album.tracklist?.length
      ? `<button class="album-btn-tracklist" data-album-index="${i}">Lista de Canciones</button>`
      : "";

    const meta = `
      <div class="album-meta">
        <div class="album-links">${links.join("")}</div>
        ${btnTracklist}
      </div>`;

    return `
      <article class="col-12 col-md-6 col-lg-3">
        <div class="album-card">
          ${imagen}
          <div class="album-body">
            <h3>${album.title}</h3>
            <span class="album-year">${album.year}</span>
            ${descripcion}
            ${meta}
          </div>
        </div>
      </article>`;
  }).join("");

  // Registrar clicks en botones tracklist
  container.querySelectorAll(".album-btn-tracklist").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      openAlbumModal(parseInt(btn.dataset.albumIndex));
    });
  });
}

// ── MODAL DE DISCO ─────────────────────────────────────────────
function openAlbumModal(index) {
  const album = window.ISMA_DATA?.albums?.[index];
  if (!album) return;

  // Pausar audio si está reproduciendo
  const audioEl = document.querySelector("audio");
  if (audioEl && !audioEl.paused) {
    audioEl.pause();
    audioEl.dataset.pausedByModal = "true";
  }

  // Construir filas del tracklist
  const tracklistHTML = album.tracklist.map((track, t) => {
    const letraId = `letra-${index}-${t}`;

    // Formatear letra: líneas vacías → <br>, resto → <span>
    const letraFormateada = track.letra
      ? track.letra.split("\n").map(l => l.trim() === "" ? "<br>" : `<span>${l}</span>`).join("\n")
      : "";

    const btnLetra = track.letra
      ? `<button class="track-btn-letra" aria-expanded="false" aria-controls="${letraId}">Letra</button>`
      : `<button class="track-btn-letra track-btn-letra--disabled" disabled>—</button>`;

    const letraBlock = track.letra
      ? `<div class="track-letra" id="${letraId}" hidden>${letraFormateada}</div>`
      : "";

    return `
      <li class="track-item">
        <div class="track-row">
          <span class="track-numero">${track.numero}</span>
          <span class="track-titulo">${track.titulo}</span>
          <span class="track-duracion">${track.duracion}</span>
          ${btnLetra}
        </div>
        ${letraBlock}
      </li>`;
  }).join("");

  // Reseña
  const resenaHTML = album.resena
    ? `<p class="album-modal-resena">${album.resena}</p>`
    : "";

  // Links
  const linksHTML = [];
  if (album.spotify) linksHTML.push(`<a href="${album.spotify}"  target="_blank" rel="noopener noreferrer" class="album-modal-link">Spotify</a>`);
  if (album.bandcamp) linksHTML.push(`<a href="${album.bandcamp}" target="_blank" rel="noopener noreferrer" class="album-modal-link">Bandcamp</a>`);

  // Eliminar modal previo si existe
  const existing = document.getElementById("album-modal-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "album-modal-overlay";
  overlay.innerHTML = `
    <div class="album-modal" role="dialog" aria-modal="true" aria-label="${album.title}">
      <button class="album-modal-close" id="album-modal-close" aria-label="Cerrar">✕</button>

      <!-- PORTADA + INFO -->
      <div class="album-modal-header">
        <div class="album-modal-cover">
          <img src="${album.image || ''}" alt="${album.title}" loading="lazy">
        </div>
        <div class="album-modal-meta">
          <h2 class="album-modal-title">${album.title}</h2>
          <span class="album-modal-year">${album.year}</span>
          ${resenaHTML}
          <div class="album-modal-links">${linksHTML.join("")}</div>
        </div>
      </div>

      <!-- TRACKLIST -->
      <div class="album-modal-tracklist">
        <h3 class="tracklist-label">Tracklist</h3>
        <ol class="tracklist-lista">${tracklistHTML}</ol>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("active"));

  // Toggle letras al pinchar botón
  overlay.querySelectorAll(".track-btn-letra:not([disabled])").forEach(btn => {
    btn.addEventListener("click", () => {
      const letraEl = document.getElementById(btn.getAttribute("aria-controls"));
      if (!letraEl) return;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.classList.toggle("active", !expanded);
      letraEl.hidden = expanded;
    });
  });

  // Cerrar modal
  function closeModal() {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 300);
  }

  document.getElementById("album-modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function onKey(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onKey);
    }
  });
}

// ── VIDEOS ─────────────────────────────────────────────────────
function renderVideos() {
  const container = document.getElementById("videos-container");
  if (!container) return;

  const videos = window.ISMA_DATA?.videos || [];

  if (videos.length === 0) {
    container.innerHTML = `<div class="col-12 text-center opacity-50"><p>No hay videos disponibles.</p></div>`;
    return;
  }

  container.innerHTML = videos.map((video, i) => {
    const thumb = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
    return `
      <article class="col-12 col-md-6 col-lg-3">
        <div class="album-card video-card" data-video-index="${i}" role="button" tabindex="0" aria-label="Ver video: ${video.title}">
          <div class="video-thumb-wrap">
            <img src="${thumb}" alt="${video.title}" loading="lazy">
            <div class="video-play-icon">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div class="album-body">
            <h3>${video.title}</h3>
            <span class="album-year">${video.year}</span>
            <p class="album-desc video-short-desc">${video.shortDesc}</p>
            <div class="album-meta">
              <span class="video-tag">▶ Video</span>
            </div>
          </div>
        </div>
      </article>`;
  }).join("");

  // Registrar clicks
  container.querySelectorAll(".video-card").forEach(card => {
    const open = () => openVideoModal(parseInt(card.dataset.videoIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") open(); });
  });
}

// ── MODAL DE VIDEO ─────────────────────────────────────────────
function openVideoModal(index) {
  const video = window.ISMA_DATA?.videos?.[index];
  if (!video) return;

  // Pausar el player de audio si está reproduciendo
  const audioEl = document.querySelector("audio");
  if (audioEl && !audioEl.paused) {
    audioEl.pause();
    audioEl.dataset.pausedByModal = "true";
  }

  // Construir créditos
  const creditosHTML = video.credits.map(c => `
    <tr>
      <td class="video-credit-rol">${c.rol}</td>
      <td class="video-credit-nombre">${c.nombre}</td>
    </tr>`).join("");

  const longDescHTML = video.longDesc
    ? `<p class="video-modal-longdesc">${video.longDesc}</p>`
    : "";

  // Eliminar modal previo si existe
  const existing = document.getElementById("video-modal-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "video-modal-overlay";
  overlay.innerHTML = `
    <div class="video-modal" role="dialog" aria-modal="true" aria-label="${video.title}">
      <button class="video-modal-close" id="video-modal-close" aria-label="Cerrar">✕</button>

      <div class="video-modal-player">
        <div class="video-iframe-wrap">
          <iframe
            id="video-iframe"
            src="https://www.youtube.com/embed/${video.youtubeId}?autoplay=1&rel=0"
            title="${video.title}"
            frameborder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>

      <div class="video-modal-info">
        <div class="video-modal-header">
          <h2 class="video-modal-title">${video.title}</h2>
          <span class="video-modal-year">${video.year}</span>
        </div>

        <p class="video-modal-shortdesc">${video.shortDesc}</p>
        ${longDescHTML}

        <details class="video-modal-credits">
          <summary>Créditos</summary>
          <table>
            <tbody>${creditosHTML}</tbody>
          </table>
        </details>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("active"));

  function closeModal() {
    overlay.classList.remove("active");
    const iframe = document.getElementById("video-iframe");
    if (iframe) iframe.src = "";
    setTimeout(() => overlay.remove(), 300);
  }

  document.getElementById("video-modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function onKey(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onKey);
    }
  });
}

window.renderAlbums = renderAlbums;
window.renderVideos = renderVideos;