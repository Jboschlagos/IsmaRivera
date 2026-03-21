/**
 * player.js — Reproductor flotante Isma Rivera
 * El elemento <audio> se crea desde JS para evitar que
 * innerHTML lo elimine al cargar el componente.
 */

const PLAYLIST = [
    {
        titulo: "A mí también me duele Chile",
        disco: "La última cena de los buitres",
        src: "/assets/audio/A_mi_tambien_me_duele_Chile.mp3"
    },
    {
        titulo: "Constelación de los caídos",
        disco: "",
        src: "/assets/audio/Constelacion_de_los_caidos.mp3"
    },
    {
        titulo: "Letras en la llaga",
        disco: "Desbautízame",
        src: "/assets/audio/Errante_letras_en_la_llaga.mp3"
    },
    {
        titulo: "Pelea de Perros",
        disco: "La última cena de los buitres",
        src: "/assets/audio/Pelea_de_perros.mp3"
    }
];

if (document.getElementById("btn-play")) {
    initPlayer();
} else {
    document.addEventListener("playerReady", initPlayer);
}

function initPlayer() {
    const playerBar = document.getElementById("audio-player");
    const btnPlay = document.getElementById("btn-play");
    const btnPrev = document.getElementById("btn-prev");
    const btnNext = document.getElementById("btn-next");
    const iconPlay = document.getElementById("icon-play");
    const iconPause = document.getElementById("icon-pause");
    const labelTitulo = document.getElementById("player-titulo");
    const labelDisco = document.getElementById("player-disco");
    const volSlider = document.getElementById("volume-slider");

    if (!playerBar || !btnPlay) {
        console.warn("[player.js] Elementos del player no encontrados");
        return;
    }

    // Crear el elemento audio desde JS
    const audio = document.createElement("audio");
    audio.preload = "metadata";
    document.body.appendChild(audio);

    let indice = 0;
    let iniciado = false;

    function cargarTema(i, autoplay = false) {
        if (!PLAYLIST.length) return;
        indice = (i + PLAYLIST.length) % PLAYLIST.length;
        const tema = PLAYLIST[indice];
        audio.src = tema.src;
        labelTitulo.textContent = tema.titulo;
        labelDisco.textContent = tema.disco;
        if (autoplay) audio.play().catch(e => console.warn("[player.js]", e));
    }

    function togglePlay() {
        if (!iniciado) {
            cargarTema(indice, true);
            iniciado = true;
            return;
        }
        audio.paused ? audio.play() : audio.pause();
    }

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

    audio.addEventListener("ended", () => cargarTema(indice + 1, true));

    btnPlay.addEventListener("click", togglePlay);
    btnNext.addEventListener("click", () => cargarTema(indice + 1, !audio.paused));
    btnPrev.addEventListener("click", () => {
        if (audio.currentTime > 3) {
            audio.currentTime = 0;
        } else {
            cargarTema(indice - 1, !audio.paused);
        }
    });

    audio.volume = parseFloat(volSlider.value);
    volSlider.addEventListener("input", () => {
        audio.volume = parseFloat(volSlider.value);
    });

    // Mostrar primer tema sin reproducir
    labelTitulo.textContent = PLAYLIST[0].titulo;
    labelDisco.textContent = PLAYLIST[0].disco;
}