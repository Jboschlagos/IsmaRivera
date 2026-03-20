# Isma Rivera — Sitio Web Oficial

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
└── assets/
    ├── css/
    │   ├── style.css           → Variables globales, navbar, footer, cards
    │   ├── musica.css
    │   ├── poesia.css
    │   ├── bio.css
    │   ├── prensa.css
    │   └── player.css
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
5. El historial del browser se actualiza con `history.pushState()`, preservando los botones atrás/adelante.
6. El player nunca se desmonta: el audio continúa en cualquier punto de la navegación.

---

## Tecnologías

| Capa           | Herramienta                                                       |
| -------------- | ----------------------------------------------------------------- |
| Maquetado      | HTML5 semántico                                                   |
| Estilos        | CSS3 con custom properties nativas                                |
| Componentes UI | Bootstrap 5.3 (grid, navbar responsive)                           |
| Lógica         | JavaScript ES6+ vanilla — sin frameworks                          |
| Tipografía     | Cormorant Garamond (cursiva) · DM Mono — Google Fonts             |
| Audio          | Web Audio API nativa (`<audio>` + JS)                             |
| Despliegue     | Archivos estáticos — compatible con GitHub Pages, Netlify, Vercel |

---

_Sitio desarrollado por Reducido | Estudio Web — 2026_
