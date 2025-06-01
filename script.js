const token = "BQDn1RNJTvimpl1W-UGkvJxSbVMaBq4RGfKdgmQt5yHs28NMr3chQyC5hmkLUbcpmSHGTM6d1KvPDgqZiE699Q8FLhLicq6qKtV1h38h8gSAxrL9bH9xwfIELV2g6eC2JRCw1A3eiKXa_O8xOxR9HinfBnSagEaiTrYGkfeP1sQogTs5ENe3E6jVvGGNzyjf6uPvVi8MFqa5XDJvEWsQJ6E3mTq9YhRYcC-SQkTbLHJ1_FUazGFIbQYooOAZQmLLPSEOCa7hErBkRwNB-0ztSrbsabPmif8p0rH_eMDVDZ0rHA";

function search() {
  const query = document.getElementById('procurar').value;
  const results = document.getElementById('resultados');
  const iframeContainer = document.getElementById('iframes-musica');
  const quadrado = document.querySelector('.quadradobarra');
  const inputs_button = document.querySelector('.input_procurar')
  const carregamentos = document.getElementById('carregar')

  results.innerHTML = "";
  iframeContainer.innerHTML = "";
  quadrado.style.display = "none";
  carregamentos.style.display = "none"
  inputs_button.style.top = "40%";


  fetch(`https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=5`, {
    headers: {
      "Authorization": `Bearer ${token}`
    }
  })
  .then(res => res.json())
  .then(data => {
    const tracks = data.tracks.items;
    if (tracks.length === 0) {
      results.innerHTML = "<p>Nenhuma música encontrada.</p>";
      return;
    }

    quadrado.style.display = "block";
    carregamentos.style.display = "block";
    inputs_button.style.top = "0%";

    tracks.forEach(track => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://open.spotify.com/embed/track/${track.id}`;
      iframe.width = "400";
      iframe.height = "80";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.loading = "lazy";
      iframe.style.borderRadius = "12px";
      iframe.style.border = "none";
      iframe.style.background = "black";
      iframeContainer.appendChild(iframe);
    });
  });
}
