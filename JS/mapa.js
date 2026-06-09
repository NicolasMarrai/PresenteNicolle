/*
  mapa.js — mapa com pin no Dom Bacon, Uberaba
  Usa OpenStreetMap via iframe (sem API key)
*/

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("mapa-container");
  if (!container) return;

  // Coordenadas do Dom Bacon - R. Segismundo Mendes, 77, Uberaba-MG
  const lat = -19.7492;
  const lng = -47.9322;
  const zoom = 16;

  // Embed via OpenStreetMap — sem precisar de API key
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.openstreetmap.org/export/embed.html?bbox=${lng - 0.003},${lat - 0.002},${lng + 0.003},${lat + 0.002}&layer=mapnik&marker=${lat},${lng}`;
  iframe.setAttribute("allowfullscreen", "");
  iframe.setAttribute("loading", "lazy");
  iframe.style.cssText =
    "width:100%;height:100%;border:none;border-radius:12px;filter:sepia(20%) saturate(90%);";

  container.appendChild(iframe);
});
