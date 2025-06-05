const token = "BQAXAcK1AkNCX9IddlhwcBJeWj-sjErBo1P58cMq6QOWO1_N4NztX5Cu6_EjZOgCBKLzwd68wX2sXvWpO7IAFBHlndPxbcwO0JMl5rnN2SFcGJH64Vx7xSNQP86uGgZRWqBSuU74x8kbykKp_hUsDkAKIFWRSrwyGrJFLQu5BxErwT8PAaZaukHyuKpquNRBcXVNn4jKbFOshgonuO65OTpvW79oXyyzv5MRKJXNkTq0QDnOI0F6qaMAEnqIlXSdQ5-XHlgrcE4-lM2MZx3t6oNEE2K5hKAc-NAvjGI495X7wA";

var input = document.getElementById("procurar");

input.addEventListener("keypress", function(event) {

  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("button_enter").click();
  }
});

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
    inputs_button.style.top = "3%";

    tracks.forEach(track => {
      const iframe = document.createElement('iframe');
      iframe.src = `https://open.spotify.com/embed/track/${track.id}`;
      iframe.width = "400";
      iframe.height = "80";
      iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
      iframe.loading = "lazy";
      iframe.style.borderRadius = "12px";
      iframe.style.border = "none";

      iframeContainer.appendChild(iframe);
    });
  });
}
