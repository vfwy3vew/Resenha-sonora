function search() {
  const query = document.getElementById('searchInput').value;
  const results = document.getElementById('results');
  results.innerHTML = '';

  const musicas = [
    { nome: "Metamorfose Ambulante", id: "0Av1l5UBkZgY0n54rrs1GU" },
    { nome: "Sociedade Alternativa", id: "1VdZ0vKfR5jneCmWIUAMxK" },
    { nome: "Gita", id: "6M3Ij2un5n0Z2R3SC6nQ7U" }
  ];

  const filtradas = musicas.filter(musica => 
    musica.nome.toLowerCase().includes(query.toLowerCase())
  );

  if (filtradas.length === 0) {
    results.innerHTML = "<p>Nenhuma música encontrada.</p>";
    return;
  }

  filtradas.forEach(musica => {
    const iframe = document.createElement('iframe');
    iframe.src = `https://open.spotify.com/embed/track/${musica.id}?utm_source=generator`;
    iframe.width = "300";
    iframe.height = "80";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy";
    iframe.style.borderRadius = "12px";
    results.appendChild(iframe);
  });
}
