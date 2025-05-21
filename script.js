const token = "BQCK9qD3ezBWeChlk_2tCjGCf3vNvLtiRF09O16rDlbeqhF8tJOiBhhkf5jRXzLI0MczTta1sTYyc6K-SRAN6MtmJJbAo7oAThkaYc-U8PQ8MbJ_ZjII6Eklwy6ytvK6eFLGRiexFXy50TPZWZWLzOKp3sJPXMoYFgxwuEpvsB-ZM1HObzXtLeFge-Jr414qw1ecHkp2CBgia-BUGINe2lDOxHbfO95biItKwqhtQP-DwpQ8pOIWWm3TDOI2r-jvJ7F4wk5-8PAHPw1q8Il0t9twhjxRiIh-ksE70n9h_zno9g";

function search() {
  const query = document.getElementById('procurar').value;
  const results = document.getElementById('resultados');
  results.innerHTML = "";

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

    tracks.forEach(track => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://open.spotify.com/embed/track/${track.id}`;
      iframe.width = "400";
      iframe.height = "80";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.loading = "lazy";
      iframe.style.borderRadius = "12px";
      results.appendChild(iframe);
    });
  });
}
