/**
 * poesia.js
 * Renderiza la grilla de libros desde data.js.
 * El router llama a renderBooks() después de cargar el fragmento.
 */

function renderBooks() {
  const container = document.getElementById("books-container");
  if (!container) return;

  const books = window.ISMA_DATA?.books || [];

  if (books.length === 0) {
    container.innerHTML = `<div class="col-12 text-center opacity-50"><p>No hay libros disponibles.</p></div>`;
    return;
  }

  container.innerHTML = books.map((book, i) => {
    const imagen = book.image
      ? `<img src="${book.image}" alt="${book.title}" loading="lazy">`
      : `<div class="book-img-placeholder"></div>`;

    return `
      <article class="col-6 col-md-4 col-lg-3">
        <figure class="poesia-card" data-book-index="${i}" role="button" tabindex="0" aria-label="Ver libro: ${book.title}">
          ${imagen}
          <figcaption>
            <h3>${book.title}</h3>
            <span>${book.year}</span>
          </figcaption>
        </figure>
      </article>`;
  }).join("");

  // Registrar clicks
  container.querySelectorAll(".poesia-card").forEach(card => {
    const open = () => openBookModal(parseInt(card.dataset.bookIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") open(); });
  });
}

// ── MODAL DE LIBRO ─────────────────────────────────────────────
function openBookModal(index) {
  const book = window.ISMA_DATA?.books?.[index];
  if (!book) return;

  // Construir poemas colapsables
  const poemasHTML = book.poemas?.map((poema, p) => {
    const poemaId = `poema-${index}-${p}`;
    const textoFormateado = poema.texto
      .split("\n")
      .map(l => l.trim() === "" ? "<br>" : `<span>${l}</span>`)
      .join("\n");

    return `
      <li class="track-item">
        <div class="track-row">
          <span class="track-numero">${p + 1}</span>
          <span class="track-titulo">${poema.titulo}</span>
          <button class="track-btn-letra" aria-expanded="false" aria-controls="${poemaId}">Leer</button>
        </div>
        <div class="track-letra" id="${poemaId}" hidden>${textoFormateado}</div>
      </li>`;
  }).join("") || "";

  // Botón comprar (solo si hay URL)
  const comprarHTML = book.comprar
    ? `<a href="${book.comprar}" target="_blank" rel="noopener noreferrer" class="book-modal-btn-comprar">Comprar</a>`
    : "";

  // Reseña
  const resenaHTML = book.resena
    ? `<p class="album-modal-resena">${book.resena}</p>`
    : "";

  // Eliminar modal previo si existe
  const existing = document.getElementById("book-modal-overlay");
  if (existing) existing.remove();

  const overlay = document.createElement("div");
  overlay.id = "book-modal-overlay";
  overlay.innerHTML = `
    <div class="album-modal" role="dialog" aria-modal="true" aria-label="${book.title}">
      <button class="album-modal-close" id="book-modal-close" aria-label="Cerrar">✕</button>

      <div class="album-modal-header">
        <div class="album-modal-cover">
          <img src="${book.image || ''}" alt="${book.title}" loading="lazy">
        </div>
        <div class="album-modal-meta">
          <h2 class="album-modal-title">${book.title}</h2>
          <span class="album-modal-year">${book.year}</span>
          ${resenaHTML}
          ${comprarHTML}
        </div>
      </div>

      <div class="album-modal-tracklist">
        <h3 class="tracklist-label">Poemas</h3>
        <ol class="tracklist-lista">${poemasHTML}</ol>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("active"));

  // Toggle poemas colapsables
  overlay.querySelectorAll(".track-btn-letra").forEach(btn => {
    btn.addEventListener("click", () => {
      const poemaEl = document.getElementById(btn.getAttribute("aria-controls"));
      if (!poemaEl) return;
      const expanded = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!expanded));
      btn.classList.toggle("active", !expanded);
      poemaEl.hidden = expanded;
    });
  });

  // Cerrar modal
  function closeModal() {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 300);
  }

  document.getElementById("book-modal-close").addEventListener("click", closeModal);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", function onKey(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", onKey);
    }
  });
}

window.renderBooks = renderBooks;