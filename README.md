# Isma Rivera — Sitio Web Oficial

> Sitio desplegado en [isma-rivera.vercel.app](https://isma-rivera.vercel.app)

---

## El problema

Un artista con obra sólida y dispersa —discos, libros, prensa, performances— no tenía presencia digital propia. Su trabajo circulaba en plataformas de terceros (Spotify, Bandcamp, redes sociales) sin un lugar que lo contuviera todo con una identidad visual coherente y bajo su propio control.

El encargo era claro: construir un sitio que funcionara como obra en sí misma. No una ficha de artista, sino un espacio que transmitiera el mismo rigor estético que tiene su poesía y su música. Paleta oscura, tipografía con carácter, imágenes que respiran.

El desafío adicional era técnico: el sitio debía incluir un reproductor de audio persistente —que no se interrumpiera al navegar entre secciones— sin recurrir a frameworks pesados ni a un backend. Todo debía funcionar como archivos estáticos, desplegables en cualquier hosting simple.

---

## Cómo se resolvió

La solución central fue convertir el sitio en una **Single Page Application (SPA) sin framework**. Un router propio en JavaScript puro carga fragmentos HTML en un contenedor `#contenido` sin recargar la página. Esto permite que el reproductor de audio, fijado al pie de la pantalla, nunca pierda su estado: la música sigue sonando mientras el visitante navega por discos, libros o prensa.

El player se construyó como una barra flotante con una playlist definida en un array de JavaScript. El elemento `<audio>` se crea programáticamente —no en el HTML— para sobrevivir a los cambios de contenido dinámico que el router produce.

Los datos del sitio —discos, libros, contacto, redes— se centralizaron en un único archivo `data.js`. Actualizar el catálogo no requiere tocar ningún HTML: los módulos de música y poesía leen ese objeto y renderizan sus grillas automáticamente.

---

## Arquitectura

```
/
├── index.html                  → Entrada única (SPA shell)
│
├── componentes/                → Fragmentos HTML por sección
│   ├── navbar.html
│   ├── footer.html             → Incluye el player flotante
│   ├── home.html
│   ├── musica.html
│   ├── poesia.html
│   ├── bio.html
│   └── prensa.html
│
├── vercel.json                 → Rewrites SPA + headers de caché
│
└── assets/
    ├── css/
    │   ├── style.css           → Variables globales, navbar, footer, cards
    │   ├── musica.css          → Grilla de discos
    │   ├── poesia.css          → Grilla de libros
    │   ├── bio.css             → Página bio
    │   ├── prensa.css          → Lista de prensa
    │   └── player.css          → Reproductor flotante
    │
    ├── js/
    │   ├── componentes.js      → Router SPA + carga de componentes
    │   ├── data.js             → Fuente única de datos (discos, libros, contacto)
    │   ├── musica.js           → Renderiza grilla de discos desde data.js
    │   ├── poesia.js           → Renderiza grilla de libros desde data.js
    │   └── player.js           → Reproductor flotante persistente
    │
    ├── audio/                  → Archivos .mp3 autohospedados
    ├── img/                    → Fotografías, portadas, logo
    └── docs/                   → Dossier PDF descargable
```

### Flujo de navegación

1. El browser carga `index.html` una sola vez.
2. `componentes.js` monta navbar y footer (con el player) en sus contenedores permanentes.
3. El router detecta el hash de la URL (`#musica`, `#poesia`, etc.) y carga el fragmento correspondiente en `#contenido`.
4. Si la sección requiere datos dinámicos, el router llama a `renderAlbums()` o `renderBooks()`, que leen `data.js`.
5. `document.title` se actualiza en cada navegación desde el mapa `PAGE_TITLES` en `componentes.js`.
6. El historial del browser se actualiza con `history.pushState()`, preservando los botones atrás/adelante.
7. El player nunca se desmonta: el audio continúa en cualquier punto de la navegación.

### Router SPA

```js
// componentes.js — núcleo del router
const PAGE_TITLES = {
  home: "Isma Rivera | Poeta Cantor",
  musica: "Música | Isma Rivera",
  poesia: "Poesía | Isma Rivera",
  bio: "Bio | Isma Rivera",
  prensa: "Prensa | Isma Rivera",
};

async function loadPage(page) {
  document.title = PAGE_TITLES[page] || "Isma Rivera | Poeta Cantor";
  const resp = await fetch(`/componentes/${page}.html`);
  document.getElementById("contenido").innerHTML = await resp.text();
  history.pushState({ page }, "", `#${page}`);
}
```

### Reproductor de audio

El player sobrevive a la navegación porque el elemento `<audio>` se crea desde JavaScript y se adjunta al `<body>`, no al fragmento HTML que el router reemplaza en cada cambio de página.

```js
// player.js — el audio nunca se desmonta
const audio = document.createElement("audio");
audio.preload = "metadata";
document.body.appendChild(audio);
```

Comportamiento del botón anterior: si el track lleva más de 3 segundos reproduciéndose, reinicia desde el inicio. Si no, retrocede al track anterior — igual que los reproductores nativos.

```js
btnPrev.addEventListener("click", () => {
  if (audio.currentTime > 3) {
    audio.currentTime = 0;
  } else {
    cargarTema(indice - 1, !audio.paused);
  }
});
```

### Datos centralizados

Toda la información del artista vive en `assets/js/data.js` como un objeto global `window.ISMA_DATA`. Para agregar un disco o libro basta con editar ese archivo — sin tocar HTML.

```js
// data.js — estructura de un disco
{
    title: "La última cena de los buitres",
    year: 2019,
    description: "",
    image: "./assets/img/discos/ultimacena.png",
    spotify: "https://open.spotify.com/...",
    bandcamp: "https://ismarivera.bandcamp.com/...",
}
```

---

## Decisiones de performance

| Decisión                                                          | Motivo                                                                        |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| `<link rel="preconnect">` para Google Fonts y jsDelivr            | Negocia conexiones antes de que el CSS las necesite                           |
| Fonts cargadas en `<head>` como `<link>`, no con `@import` en CSS | El `@import` dentro de CSS es bloqueante; el `<link>` en `<head>` es paralelo |
| `loading="lazy"` en imágenes de grillas                           | Las portadas de discos y libros no bloquean el render inicial                 |
| `vercel.json` con `Cache-Control: max-age=31536000` en assets     | CSS, JS, imágenes y audio se cachean por 1 año en el browser                  |
| `<audio>` creado desde JS, no en HTML                             | Sobrevive a los `innerHTML` del router sin interrumpir la reproducción        |

---

## Despliegue

El sitio es 100% estático. No tiene backend, base de datos ni proceso de build.

**Vercel** — configurado con `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ]
}
```

El `rewrite` garantiza que cualquier URL sirva `index.html`, necesario para que el hash routing funcione al acceder desde un link externo.

---

## Tecnologías

| Capa                 | Herramienta                                                             |
| -------------------- | ----------------------------------------------------------------------- |
| Maquetado            | HTML5 semántico                                                         |
| Estilos              | CSS3 con custom properties nativas (`--ocre`, `--azul`, `--negro`)      |
| Componentes UI       | Bootstrap 5.3 — solo grid y navbar responsive                           |
| Lógica               | JavaScript ES6+ vanilla — sin frameworks ni bundlers                    |
| Tipografía           | Cormorant Garamond italic (títulos) · DM Mono (metadata) — Google Fonts |
| Audio                | API nativa `<audio>` + JS — archivos `.mp3` autohospedados              |
| Despliegue           | Vercel — archivos estáticos, sin build step                             |
| Control de versiones | Git + GitHub                                                            |

---

_Sitio desarrollado por Reducido | Estudio Web — 2026_
