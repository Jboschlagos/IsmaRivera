/**
 * player.js — Reproductor flotante Isma Rivera
 *
 * Espera el evento "playerReady" de componentes.js antes de iniciar,
 * para asegurarse que el HTML del player ya está en el DOM.
 *
 * PLAYLIST: editá este array para agregar o quitar canciones.
 * Campos:
 *   titulo → nombre de la canción
 *   disco  → nombre del disco
 *   src    → ruta al .mp3 desde la raíz del sitio
 */

const PLAYLIST = [
    {
        titulo: "A mí también me duele Chile",
        disco: "La última cena de los buitres",
        src: "./assets/audio/A_mi_también_me_duele_Chile_Isma_Rivera.mp3"
    },
    {
        titulo: "Constelación de los caídos",
        disco: "La última cena de los buitres",
        src: "./assets/audio/Constelacion_de_los_caidos_Isma_rivera.mp3"
    }
];

// ── Init al evento playerReady ────────────────────────────
document.addEventListener("playerReady", initPlayer);

function initPlayer() {
    const audio = document.getElementById("audio-engine");
    const playerBar = document.getElementById("audio-player");
    const btnPlay = document.getElementById("btn-play");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const iconPlay = document.getElementById("icon-play");
    const iconPause = document.getElementById("icon-pause");
    const labelTitulo = document.getElementById("player-titulo");
    const labelDisco = document.getElementById("player-disco");
    const volSlider = document.getElementById("volume-slider");

    // Si algún elemento no existe, salir silenciosamente
    if (!audio || !playerBar || !btnPlay) return;

    let indice = 0;
    let iniciado = false;

    // ── Cargar tema ────────────────────────────────────────
    function cargarTema(i, autoplay = false) {
        if (!PLAYLIST.length) return;
        indice = (i + PLAYLIST.length) % PLAYLIST.length;
        const tema = PLAYLIST[indice];

        audio.src = tema.src;
        labelTitulo.textContent = tema.titulo;
        labelDisco.textContent = tema.disco;

        if (autoplay) {
            audio.play().catch(() => { });
        }
    }

    // ── Play / Pause ───────────────────────────────────────
    function togglePlay() {
        if (!iniciado) {
            cargarTema(indice, true);
            iniciado = true;
            return;
        }
        audio.paused ? audio.play() : audio.pause();
    }

    // ── Íconos ─────────────────────────────────────────────
    audio.addEventListener("play", () => {
        iconPlay.style.display = "none";
        iconPause.style.display = "block";
        playerBar.classList.add("playing");
    });

    audio.addEventListener("pause", () => {
        iconPlay.style.display = "block";
        iconPause.style.display = "none";
        playerBar.classList.remove("playing");
    });

    // Avanzar al siguiente al terminar
    audio.addEventListener("ended", () => {
        cargarTema(indice + 1, true);
    });

    // ── Botones ────────────────────────────────────────────
    btnPlay.addEventListener("click", togglePlay);

    btnNext.addEventListener("click", () => {
        cargarTema(indice + 1, !audio.paused);
    });

    btnPrev.addEventListener("click", () => {
        // Si lleva más de 3 segundos → reiniciar; si no → tema anterior
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            cargarTema(indice - 1, !audio.paused);
        }
    });

    // ── Volumen ────────────────────────────────────────────
    audio.volume = parseFloat(volSlider.value);
    volSlider.addEventListener("input", () => {
        audio.volume = parseFloat(volSlider.value);
    });

    // ── Estado inicial: mostrar primer tema sin reproducir ─
    if (PLAYLIST.length) {
        labelTitulo.textContent = PLAYLIST[0].titulo;
        labelDisco.textContent = PLAYLIST[0].disco;
    }
}