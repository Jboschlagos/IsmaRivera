/**
 * data.js — Fuente única de datos del sitio Isma Rivera
 * Editá aquí para actualizar discos, libros, contacto y redes.
 */

const DATA = {

  // ── DISCOS ────────────────────────────────────────────────
  albums: [
    {
      title: "La última cena de los buitres",
      year: 2019,
      description: "",
      image: "./assets/img/discos/ultimacena.png",
      spotify: "https://open.spotify.com/album/ejemplo1",
      bandcamp: "https://ismarivera.bandcamp.com/album/la-ultima-cena",
    },
    {
      title: "El Silencio",
      year: 2022,
      description: "",
      image: "./assets/img/discos/elsilencio.png",
      spotify: "https://open.spotify.com/album/ejemplo2",
      bandcamp: "https://ismarivera.bandcamp.com/album/el-silencio",
    },
    {
      title: "Errantes",
      year: 2022,
      description: "",
      image: "",
      spotify: "https://open.spotify.com/album/ejemplo3",
      bandcamp: "https://ismarivera.bandcamp.com/album/errantes",
    },
  ],

  // ── LIBROS ────────────────────────────────────────────────
  books: [
    {
      title: "Desbautízame",
      year: 2015,
      type: "Poesía",
      image: "./assets/img/libros/desbautizamelibro.png",
    },
    {
      title: "Tizne",
      year: 2017,
      type: "Poesía",
      image: "./assets/img/libros/tizne.png",
    },
    {
      title: "Rincones",
      year: 2018,
      type: "Poesía",
      image: "./assets/img/libros/rincones.png",
    },
    {
      title: "Colonia Penal",
      year: 2021,
      type: "Poesía",
      image: "./assets/img/libros/coloniapenal.png",
    },
  ],

  // ── CONTACTO Y REDES ──────────────────────────────────────
  contact: {
    email: "contacto@ismarivera.com",
    whatsapp: "56912345678",
    instagram: "https://instagram.com/ismarivera",
    youtube: "https://youtube.com/@ismarivera",
    bandcamp: "https://ismarivera.bandcamp.com",
    spotify: "https://open.spotify.com/intl-es/artist/1m1mEMI4Yw5jr8aoguhgy8",
  },

  // ── SITIO ─────────────────────────────────────────────────
  site: {
    title: "Isma Rivera",
    subtitle: "Poeta Cantor",
  },

};

window.ISMA_DATA = DATA;