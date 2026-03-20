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

  container.innerHTML = books.map(book => {
    const imagen = book.image
      ? `<img src="${book.image}" alt="${book.title}" loading="lazy">`
      : `<div class="book-img-placeholder"></div>`;

    return `
      <article class="col-6 col-md-4 col-lg-3">
        <figure class="poesia-card">
          ${imagen}
          <figcaption>
            <h3>${book.title}</h3>
            <span>${book.year}</span>
          </figcaption>
        </figure>
      </article>`;
  }).join("");
}

window.renderBooks = renderBooks;