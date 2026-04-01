/**
 * data.js — Fuente única de datos del sitio Isma Rivera
 * Editá aquí para actualizar discos, libros, videos, contacto y redes.
 */

const DATA = {

  // ── DISCOS ────────────────────────────────────────────────
  albums: [
    {
      title: "La última cena de los buitres",
      year: 2019,
      description: "Primer disco solista de Isma Rivera.",
      image: "./assets/img/discos/ultimacena.png",
      spotify: "https://open.spotify.com/intl-es/album/6CtCJ71uUcKSs59ZmALo08?si=vQ_4hc5oQPex5WhYBRHzwQ",
      bandcamp: "selloprecario.bandcamp.com/album/la-ltima-cena-de-los-buitres",
      resena: "Primer disco solista de Isma Rivera. Una propuesta que combina escritura, voz y experimentación sonora, cruzando el punk con la tradición folclórica latinoamericana.",
      tracklist: [
        {
          numero: 1,
          titulo: "La última cena de los buitres",
          duracion: "4:12",
          letra: `Do you have enough bone-broken limbs to cover the sun?
Hand me over your dead and give me the list of their names
in one thousand two hundred word limit.
Today, my body was a TV'd massacre that had to fit into sound-bites
and word limits and moves those that are desensitized to terrorist blood.
(Rafeef Ziadah)

Mi nombre está marcado por el fuego
de doce tribus como doce semillas
quemadas por el fósforo blanco
de la estrella nación.

Mi nombre está marcado por la guerra
el odio al padre, el desprecio del hijo
la lucha de clanes
con manos de sangre.

Mi nombre está marcado por el huacho
aquel forzado a partir lejos
el abandonado en la orilla contraria
frente a la arena cristiana.`,
        },
        {
          numero: 2,
          titulo: "A mí también me duele Chile",
          duracion: "3:47",
          letra: `A mí también me duele Chile
su sombra neoliberal proyectada
en televisores cavernas, sus universidades
moldeadoras de mano de obra intelectual
sus ropas tendidas
esperando al tiempo.

A mí también me duele Chile
mi patriotismo cuando el fútbol y no más
mi desconfianza policiática
oculta tras el polvo de moneda
mi insomnio ideológico
cultivado en memorias ajenas
mis oídos incrédulos.

A mí también me duele Chile
tu absoluta falta
de médula conducta
tu palabra voluble
en intolerancia gráfica
y geográfica
tu pliegue tensado
por polos morales
marchitos.`,
        },
        {
          numero: 3,
          titulo: "Constelación de los caídos",
          duracion: "5:03",
          letra: `Levanté cada piedra por minúscula que fuera
esperando que me hablaras en una tela olvidada.

Grité por los pasillos del desierto:
"con la astilla de un fémur yo me conformo"
Grité.

Quisiste aparecer
desaparecer.`,
        },
        {
          numero: 4,
          titulo: "Pelea de perros",
          duracion: "4:28",
          letra: `A un lado ladridos
al otro justicia.

Sueños husmeando la fisura del sueño
entre agua y humo tóxico se plasman
tangibles mordiendo respuestas demoran
su llegada, brillan los ojos profundos.

Sus cruces señaléticas no bastan
para que reculen los muertos de antaño
de hoy, este ciclo no para y repite
lo vivido por padres que perdieron hace tanto ya
esa esperanza a causa de mentiras y mentiras que se hicieron verdades
el arcoíris gris
como sus ternos zapatos corbatas
gris como el pavimento edificios grises
los colores, así con ojos de perro en blanco y negro
la ciudad sin carnaval
pero no más.

Hoy traemos colores y ladridos
hoy el carnaval es nuestro, de todos nuevamente
y nos unimos callejeros viejos canes
somos la jauría que creíste muerta de hambre
hambre hay
y eres la cena esperada.`,
        },
        {
          numero: 5,
          titulo: "Letras en la llaga",
          duracion: "3:55",
          letra: `Letra de fantasía.

En el umbral del tiempo detenido
las palabras se vuelven ceniza fría,
cada sílaba un río contenido
que busca cauce en la melancolía.

No hay muro que resista la memoria
ni olvido que no tenga su fisura,
la llaga guarda toda nuestra historia
y en ella escribe el tiempo su escritura.`,
        },
        {
          numero: 6,
          titulo: "Canción del simple",
          duracion: "3:21",
          letra: `Letra de fantasía.

Simple como el agua que desciende
simple como el viento en la llanura,
el corazón que busca y no comprende
la extraña geometría de la altura.

Todo lo que fue se vuelve sombra
todo lo que es se vuelve lo que fue,
y en esa danza que al final nos nombra
aprendemos a ser lo que no sé.`,
        },
        {
          numero: 7,
          titulo: "La marcha de los sin nombre",
          duracion: "4:44",
          letra: `Letra de fantasía.

Marchan los que nunca tuvieron bandera
marchan los que el tiempo borró del mapa,
su voz es el eco de una primavera
que ningún invierno del todo tapa.

Son la raíz que nadie ve ni nombra
son el silencio antes del grito claro,
marchan envueltos en su propia sombra
hacia un amanecer que aún es raro.`,
        },
        {
          numero: 8,
          titulo: "El festín",
          duracion: "3:38",
          letra: `Letra de fantasía.

Siéntate a la mesa del festín eterno
donde los comensales son de hueso y viento,
prueba el vino amargo del invierno
y el pan cocido al fuego del tormento.

Nadie sale intacto del banquete
nadie sale igual de la función,
la noche siempre cobra su jinete
y el alba siempre pide su porción.`,
        },
      ],
    },
    {
      title: "El Silencio",
      year: 2022,
      description: "Sencillo",
      image: "./assets/img/discos/el_silencio.png",
      spotify: "https://open.spotify.com/intl-es/album/292XdmKQX3BFwkFgs2jecB",
      bandcamp: "https://ismarivera.bandcamp.com/album/el-silencio",
      resena: "Sencillo de 2022.",
      tracklist: [
        {
          numero: 1,
          titulo: "El Silencio",
          duracion: "3:50",
          letra: `Letra de fantasía.

El silencio tiene dientes
el silencio tiene manos,
el silencio es más urgente
que los gritos más lejanos.

Cuando todo calla adentro
cuando afuera ruge el mundo,
el silencio es un encuentro
con lo propio más profundo.`,
        },
      ],
    },
    {
      title: "Errantes",
      year: 2022,
      description: "",
      image: "/assets/img/discos/errantes.png",
      spotify: "https://open.spotify.com/album/ejemplo3",
      bandcamp: "https://selloprecario.bandcamp.com/album/desbaut-zame",
      resena: "Disco del proyecto Errantes.",
      tracklist: [
        {
          numero: 1,
          titulo: "Errante I",
          duracion: "4:10",
          letra: `Letra de fantasía.

Errante por los bordes de la patria
errante por los márgenes del río,
cargando con la herencia de una hazaña
que nadie reclamó bajo este frío.`,
        },
        {
          numero: 2,
          titulo: "Errante II",
          duracion: "3:55",
          letra: `Letra de fantasía.

El camino no pregunta de dónde vienes
el camino solo sabe que estás yendo,
y entre los pies y el polvo que sostienes
vas dejando lo que fuiste construyendo.`,
        },
        {
          numero: 3,
          titulo: "Desbautízame",
          duracion: "5:12",
          letra: `Letra de fantasía.

Desbautízame del nombre que me dieron
desbautízame del miedo que sembraron,
que caigan los apellidos que me pusieron
y quede lo que soy tras lo que borraron.`,
        },
      ],
    },
  ],

  // ── VIDEOS ────────────────────────────────────────────────
  videos: [
    {
      youtubeId: "K0JE1jFJG4w",
      title: "La última cena de los buitres",
      year: 2019,
      shortDesc: "Video oficial inspirado en la canción que abre el disco homónimo de Isma Rivera. Colección «Videos Precarios». Sello Precario 2019.",
      longDesc: "Sobre un escenario sórdido comen y beben personajes paganos de todos los tiempos. Un ojo agudo observa atento y distante el momento. Lo registra en su retina como un álbum de fotos que devela poco a poco un secreto.",
      credits: [
        { rol: "Realización", nombre: "Daniel Jesús Díaz — «La Pieza Oscura», estudio andante. Marzo 2019, entre Ñuñoa, Santiago y Copiapó, Atacama, Chile." },
        { rol: "Autor e interpretación", nombre: "Ismael Rivera L." },
        { rol: "Compositores", nombre: "Paloma Soto, Cristián «Gato» Olea e Ismael Rivera" },
        { rol: "Guitarra eléctrica", nombre: "Cristián «Gato» Olea — arreglos e interpretación" },
        { rol: "Bajo, guitarra rítmica, base y teclado", nombre: "Daniel Jesús Díaz — arreglos e interpretación" },
        { rol: "Producción, grabación, mezcla y masterización", nombre: "Daniel Jesús Díaz — «La Pieza Oscura», estudio andante. San Miguel, Copiapó y Bahía Inglesa, Chile." },
      ],
    },
    {
      youtubeId: "G89Pbwi0TlE",
      title: "A mí también me duele Chile",
      year: 2019,
      shortDesc: "Video oficial inspirado en el 2do sencillo del disco «La última cena de los buitres» de Isma Rivera. Colección «Videos Precarios». Sello Precario 2019.",
      longDesc: "",
      credits: [
        { rol: "Dirección y cámara", nombre: "Maritza Farías Cerpa" },
        { rol: "Corrección de color", nombre: "Violeta Paus" },
        { rol: "Fotografía", nombre: "Carla Motto Tejada" },
        { rol: "Protagonista", nombre: "Mónica Ríos Contreras" },
        { rol: "Letra y arreglos de voz", nombre: "Ismael Rivera L." },
        { rol: "Composición, arreglos, interpretación, grabación y producción", nombre: "Daniel Jesús Díaz — «La pieza oscura», estudio andante" },
      ],
    },
    {
      youtubeId: "Od2zkAa2_q4",
      title: "Pelea de perros",
      year: 2020,
      shortDesc: "Video ensamble artístico. Se conjugan música, poesía, documentación audiovisual y obra visual. Canción del disco «La última cena de los buitres» (Sello Precario, 2019).",
      longDesc: "",
      credits: [
        { rol: "Autora e idea original", nombre: "Daniela Castillo C." },
        { rol: "Realizadores", nombre: "Isma Rivera, Claudio Meza, Daniela Castillo C." },
        { rol: "Música", nombre: "Daniel Jesús Díaz" },
        { rol: "Poesía y voz", nombre: "Isma Rivera" },
        { rol: "Documentación audiovisual", nombre: "Claudio Meza" },
        { rol: "Fecha", nombre: "21 de noviembre de 2020" },
      ],
    },
    {
      youtubeId: "uJBwLT5c1RE",
      title: "Canción del simple",
      year: 2019,
      shortDesc: "Video oficial inspirado en el 4to sencillo del disco «La última cena de los buitres» de Isma Rivera. Canción original del trovador cubano Freddy Laffita. Sello Precario, 2019.",
      longDesc: "",
      credits: [
        { rol: "Dirección y cámara", nombre: "Maritza Farías Cerpa" },
        { rol: "Corrección de color", nombre: "Daniela Castillo Cortéz" },
        { rol: "Fotografía", nombre: "Carla Motto Tejada" },
        { rol: "Protagonista", nombre: "Carolina Jullian Suárez" },
        { rol: "Composición y letra", nombre: "Freddy Laffita" },
        { rol: "Voz", nombre: "Ismael Rivera L." },
        { rol: "Arreglos, interpretación, grabación y producción", nombre: "Ramírez Neira — «La pieza oscura», estudio andante" },
      ],
    },
  ],

  // ── LIBROS ────────────────────────────────────────────────
  books: [
    {
      title: "Desbautízame",
      year: 2015,
      type: "Poesía",
      image: "./assets/img/libros/desbautizamelibro.png",
      resena: "El poemario plantea un gesto de ruptura: enfrentarse a Dios desde la igualdad, no desde la sumisión. Desbautizarse es afirmar libertad sin poder desprenderse del pasado. La experiencia deja de ser individual y se vuelve generacional, marcada por la tensión permanente entre lo humano y lo divino. Por Luis Aránguiz",
      comprar: "",
      poemas: [
        {
          titulo: "Poema placeholder 1",
          texto: `“¿Quién diseña el dolor de otro cuerpo?\ ¿Quién sabe dónde duele la palabra?”`
        },
        {
          titulo: "Poema placeholder 2",
          texto: `Otro verso placeholder\ny su continuación\nuna tercera línea.`
        }
      ]
    },
    {
      title: "Tizne",
      year: 2017,
      type: "Poesía",
      image: "./assets/img/libros/tizne.png",
      resena: "El libro gira en torno a la imagen del tizne como huella que mancha y oculta, pero también revela una violencia latente. Más que una denuncia directa, la escritura sugiere una herida en la dignidad humana, utilizando la poesía como espacio de insinuación antes que de afirmación explícita. Por Verónica Jiménez Dotte",
      comprar: "",
      poemas: [
        {
          titulo: "Poema placeholder 1",
          texto: `Primera línea del poema\nsegunda línea\ntercera línea.`
        },
        {
          titulo: "Poema placeholder 2",
          texto: `Otro verso placeholder\ny su continuación\nuna tercera línea.`
        }
      ]
    },
    {
      title: "Rincones",
      year: 2018,
      type: "Poesía",
      image: "./assets/img/libros/rincones.png",
      resena: "El prólogo construye una metáfora donde la araña representa una lucha contra el tiempo y la muerte. Su tejido no es solo supervivencia, sino estrategia: un intento constante por retrasar el final. El libro se instala así en una tensión entre lo inevitable y su postergación. Por Rafael Rubio",
      comprar: "",
      poemas: [
        {
          titulo: "Poema placeholder 1",
          texto: `“A veces me siento\ una araña colgando \ de un único hilo \ en el viento aferrado \ para no caer \ otra vez \ en la tristeza.”`
        },
        {
          titulo: "Poema placeholder 2",
          texto: `Otro verso placeholder\ny su continuación\nuna tercera línea.`
        }
      ]
    },
    {
      title: "Colonia Penal",
      year: 2021,
      type: "Poesía",
      image: "./assets/img/libros/coloniapenal.png",
      resena: "PEl libro trabaja sobre la memoria y la ausencia, devolviendo voz a cuerpos silenciados por la historia reciente. Construye una imagen fragmentada del encierro —isla, colonia, celda, cuerpo— donde el lenguaje intenta resistir el olvido. Es un gesto de duelo y testimonio que insiste en recordar lo que se quiso borrar.",
      comprar: "",
      poemas: [
        {
          titulo: "Poema placeholder 1",
          texto: `Primera línea del poema\nsegunda línea\ntercera línea.`
        },
        {
          titulo: "Poema placeholder 2",
          texto: `Otro verso placeholder\ny su continuación\nuna tercera línea.`
        }
      ]
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