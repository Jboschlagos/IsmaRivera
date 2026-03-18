/**
 * componentes.js
 * Carga navbar y footer (que incluye el player) en todas las páginas.
 * Los archivos viven en /componentes/ y se editan directamente ahí.
 */

async function loadComponent(containerId, url) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const resp = await fetch(url);
        if (!resp.ok) throw new Error(`No se pudo cargar: ${url}`);
        container.innerHTML = await resp.text();
    } catch (err) {
        console.error(`[componentes.js] ${err.message}`);
    }
}

document.addEventListener("DOMContentLoaded", async () => {
    await loadComponent("navbar-container", "/componentes/navbar.html");
    await loadComponent("footer-container", "/componentes/footer.html");

    // El player vive dentro de footer.html, avisamos cuando está listo
    document.dispatchEvent(new CustomEvent("playerReady"));
});