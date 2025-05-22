const token = "BQBgTmvl_DsM5dx26pYi7xActJnzIhitiV__Jw4WTx3CvI1NngD1E3w2CSEBZdEQbWtWzCQUPOii457iPVxYp4ofmDt2_bNrkCnx3qWfCPIlKTR-FuoQPOoQsAM-T-ubKlP24zCgyMFDnv86XUOi7SCTgMGt7YrySgu3OUs5XKVpLiwT8pMLKTzhNbDCjKp70pStvb3KasFrEVp8Pv1SVLBjqPnD12nuMHS2uxeL39-156NdukPOkfLzbc4ZyGfzJDTVSDCDLbwDU2hDmlMRZbz5obUKNIF7wAWbIycgH4ZB0w";

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


console.log('query')