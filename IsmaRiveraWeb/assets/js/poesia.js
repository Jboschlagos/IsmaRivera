document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('books-container');
  
  if (!container) return;

  // Obtener datos de libros
  const books = window.ISMA_DATA?.books || [];

  // Si no hay datos, mostrar mensaje
  if (books.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center">
        <p class="text-muted">No hay libros disponibles en este momento.</p>
      </div>
    `;
    return;
  }

  // Renderizar cada libro
  books.forEach(book => {
    const bookCard = createBookCard(book);
    container.innerHTML += bookCard;
  });

  // Agregar eventos de hover opcionales
  addHoverEffects();
});

/**
 * Crea el HTML de una tarjeta de libro
 * @param {Object} book - Datos del libro
 * @returns {string} HTML de la tarjeta
 */
function createBookCard(book) {
  return `
    <article class="col-6 col-md-4">
      <figure class="poesia-card">
        <img src="${book.image}" 
             alt="${book.title}" 
             onerror="this.src='./assets/img/placeholder-book.jpg'">
        <figcaption>
          <h3>${book.title}</h3>
          <span>${book.year} · ${book.type}</span>
        </figcaption>
      </figure>
    </article>
  `;
}

/**
 * Agrega efectos adicionales de hover si se desea
 */
function addHoverEffects() {
  const cards = document.querySelectorAll('.poesia-card');
  
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      // Podrías agregar sonidos, animaciones adicionales, etc.
      // Por ahora dejamos el efecto CSS puro
    });
  });
}

// Manejo de errores en imágenes
document.addEventListener('error', (e) => {
  if (e.target.tagName === 'IMG') {
    e.target.src = './assets/img/placeholder-book.jpg';
  }
}, true);