/**
 * poesia.js
 * Renderiza la grilla de libros desde data.js
 */

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("books-container");
  if (!container) return;

  const books = window.ISMA_DATA?.books || [];

  if (books.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center opacity-50">
        <p>No hay libros disponibles por el momento.</p>
      </div>`;
    return;
  }

  books.forEach(book => {
    container.innerHTML += createBookCard(book);
  });
});

function createBookCard(book) {
  const imagen = book.image
    ? `<img src="${book.image}" alt="${book.title}">`
    : `<div class="book-img-placeholder"></div>`;

  return `
    <article class="col-12 col-md-6 col-lg-3">
      <figure class="poesia-card">
        ${imagen}
        <figcaption>
          <h3>${book.title}</h3>
          <span>${book.year}</span>
        </figcaption>
      </figure>
    </article>`;
}