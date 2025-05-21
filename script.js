const token = "BQBmdSu1ocp7L0xKy8raBXV0yCWuXAiI3Pz91QnaHieLocK_xPhCZMrR-iowoW9NjdVskXnmGN_aTYemSKpHwG1L_nLTvQT2hy48eO8ZkNMaORtmX1kLwb1O8Xm9nZyv6yiKcqxz5uVsJKHIjw46TWfz-3OxY5tZ8fOxVjw-PK50UbgmWcZu5Wrs1yCfGItVpvHb9Lg7EbzRW-MIjOOcMlYLWaFLc0GVHSQqubp4bdfbb7YYxuThreyz2p6pwo-Z0s849bzHTCY7HW9Vc_uF3wY8YzG8eW8jZZYWzCH_-Ui-8A";

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
