// Base de datos centralizada del sitio
const DATA = {
  // Información de discos
  albums: [
    {
      title: "La ultima Cena de los Buitres",
      year: 2019,
      description: "Descripción del segundo disco.",
      image: "./assets/img/ultimacena.png",
      spotify: "https://open.spotify.com/album/ejemplo2",
      bandcamp: "https://ismarivera.bandcamp.com/album/segundo-disco",
    },
    {
      title: "Silencio ",
      year: 2022,
      description: "Descripción del segundo disco.",
      image: "./assets/img/",
      spotify: "https://open.spotify.com/album/ejemplo2",
      bandcamp: "https://ismarivera.bandcamp.com/album/segundo-disco",
    },
    {
      title: "errantes ",
      year: 2022,
      description: "Descripción del segundo disco.",
      image: "./assets/img/disco2.jpg",
      spotify: "https://open.spotify.com/album/ejemplo2",
      bandcamp: "https://ismarivera.bandcamp.com/album/segundo-disco",
    },
    // Agrega más discos aquí
  ],

  // Información de libros
  books: [
    {
      title: "Desbautizame",
      year: 2015,
      type: "Poesía",
      description: "Poemas sobre el paso del tiempo y la memoria.",
      image: "./assets/img/desbautizamelibro.png",
    },
    {
      title: "Geografía Interior",
      year: 2020,
      type: "Poesía",
      description: "Mapas emocionales y territorios del yo.",
      image: "./assets/img/libro2.jpg",
    },
    {
      title: "Voces del Camino",
      year: 2018,
      type: "Poesía",
      description: "Encuentros, diálogos y ecos de otros.",
      image: "./assets/img/libro3.jpg",
    },
    {
      title: "Primer Cuaderno",
      year: 2016,
      type: "Poesía",
      description: "Los primeros versos, las primeras búsquedas.",
      image: "./assets/img/libro4.jpg",
    },
  ],

  // Información de contacto y redes sociales
  contact: {
    email: "contacto@ismarivera.com",
    whatsapp: "56912345678",
    instagram: "https://instagram.com/ismarivera",
    youtube: "https://youtube.com/@ismarivera",
    bandcamp: "https://ismarivera.bandcamp.com",
    spotify: "https://open.spotify.com/intl-es/artist/1m1mEMI4Yw5jr8aoguhgy8",
  },

  // Configuración del sitio
  site: {
    title: "Isma Rivera ",
    subtitle: "Poeta Cantor",
    description: "Música, poesía y palabra",
  },
};

// Hacer DATA disponible globalmente
window.ISMA_DATA = DATA;
