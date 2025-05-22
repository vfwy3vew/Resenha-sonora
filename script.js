const token = "BQDfbbVuHGoLbPEjrb7DUWa2h9CFcxNAySqGbIR8LBc5wO5PEq83fisMP8SYRtZv1OBOCWhSBc5Dq6t75Zbm25iNqYNGNU5Flh4q5BcRiBLAs__0A6Qoq0R248ZCKVP91iM5936t0X0p6YtIhdUlU885obInrspj6RH0YxzG52AyEX6-4BLIW7vU2k-ifJybUm0YQX5S-HZcVFF-Zr56290RaxHMj0eyP6yPEG_W3C7X_uE3dfS1_42sv_jeuRKTut7Y9TkIcI1LlzIT1bLujo9BfuirHDqzBw3x38o8W05_Hw";

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
      iframe.style.border = "none"
      iframe.style.background = "black"
      results.appendChild(iframe);
    });
  });
}