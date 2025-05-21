const token = "BQBuQeUOi4IK_WUFcBZNluwYlOfb3im0b7uZ-V1Sc-tSVlmurtNvJoinn86aYFiS0Q-JsabmR_kFuO5b0wSRAoUelZLST7zt4EpFYKLdXja681ZkvimOaff-cMBJYAXjc5jJI5bp_fVCBE1wCCWq_bWDBPWlW5pd55kiomb9RntK_l0yTcd7WX7zCa_Ir5qYUXl2DqAGIDodEWyUu91ACBgdf3P6Ns8_iaY0XVOHYKUjG0qzLlDO5U5IYSPpvq3RDZtveien6Pv0teXmfk6ySZLugTobPBvS10L9aKOifJ5eVg";

function search() {
  const query = document.getElementById('searchInput').value;
  const results = document.getElementById('results');
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
