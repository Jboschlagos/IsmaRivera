/**
 * componentes.js
 * Carga navbar, footer y player en todas las páginas.
 * Despacha el evento "playerReady" cuando el player HTML está en el DOM.
 */

async function loadComponent(containerId, url) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`No se pudo cargar: ${url}`);
        container.innerHTML = await resp.text();
    } catch (err) {
        console.warn(`[componentes.js] ${err.message}`);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar-container", "./componentes/navbar.html");
    await loadComponent("footer-container", "./componentes/footer.html");
    await loadComponent("player-container", "./componentes/player.html");

    // Avisar a player.js que el HTML ya está en el DOM
    document.dispatchEvent(new CustomEvent("playerReady"));
});