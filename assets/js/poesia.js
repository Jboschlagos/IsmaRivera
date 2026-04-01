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

  container.innerHTML = books
    .map((book, i) => {
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
    })
    .join("");

  // Registrar clicks
  container.querySelectorAll(".poesia-card").forEach((card) => {
    const open = () => openBookModal(parseInt(card.dataset.bookIndex));
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") open();
    });
  });
}

function openBookModal(index) {
  const book = window.ISMA_DATA?.books?.[index];
  if (!book) return;

  // Eliminar modal previo
  const existing = document.getElementById("book-modal-overlay");
  if (existing) existing.remove();

  // Lista de poemas (solo títulos)
  const listaPoemas = book.poemas?.map((poema, i) => {
    return `<li class="poema-item" data-index="${i}">${poema.titulo}</li>`;
  }).join("") || "<li class='opacity-50'>Sin poemas</li>";

  const overlay = document.createElement("div");
  overlay.id = "book-modal-overlay";

  overlay.innerHTML = `
    <div class="poesia-modal" role="dialog" aria-modal="true">
      
      <button class="poesia-modal-close" aria-label="Cerrar">✕</button>

      <div class="poesia-modal-grid">

        <!-- COLUMNA IZQUIERDA -->
        <aside class="poesia-sidebar">
          <img src="${book.image || ""}" alt="${book.title}">
          <h2>${book.title}</h2>
          <span>${book.year}</span>
          ${book.resena ? `<p class="poesia-resena">${book.resena}</p>` : ""}
          ${book.comprar ? `<a href="${book.comprar}" target="_blank">Comprar</a>` : ""}

          <ul class="poesia-lista">
            ${listaPoemas}
          </ul>
        </aside>

        <!-- COLUMNA DERECHA -->
        <section class="poesia-viewer" id="poema-viewer">
          <p class="poema-placeholder">Selecciona un poema</p>
        </section>

      </div>
    </div>
  `;

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add("active"));

  const viewer = overlay.querySelector("#poema-viewer");

  // Evento: seleccionar poema
  overlay.querySelectorAll(".poema-item").forEach(item => {
    item.addEventListener("click", () => {
      const poema = book.poemas[item.dataset.index];

      // estado activo visual
      overlay.querySelectorAll(".poema-item").forEach(el => el.classList.remove("active"));
      item.classList.add("active");

      viewer.innerHTML = `
        <h3 class="poema-titulo">${poema.titulo}</h3>
        <div class="poema-texto">
          ${poema.texto.replace(/\n/g, "<br>")}
        </div>
      `;
    });
  });

  // Cerrar modal
  const closeBtn = overlay.querySelector(".poesia-modal-close");

  function closeModal() {
    overlay.classList.remove("active");
    setTimeout(() => overlay.remove(), 250);
  }

  closeBtn.addEventListener("click", closeModal);

  overlay.addEventListener("click", e => {
    if (e.target === overlay) closeModal();
  });

  document.addEventListener("keydown", function esc(e) {
    if (e.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", esc);
    }
  });
}

window.renderBooks = renderBooks;
