const token = "BQAVOejlm9MLwVmqbxgtG-CmSjs4B7DyzaohP1G1k8WEWrQUISYFNlZQsoiKX1KxDsEvSvXn0NUR4DzKpdee9XBd_0IHlFyqFvOB1uJDMHz557QzIbzZeByThgwETKsXzz5DNEzxj9YFlcYISH_t6zNCiI79e1LCusTiQeXwS9BgaPNR3UO740TjHqwXggn1_x8g_U4w_Reb369f8pjeRN173NzHfSVxjAbJl_Yi_OfkBJj3R-33JNP6t2cn9feeFRv1d7ZUHBtV053jf9eMP6EqRPJckYePIRC6Lz3zCwQBNw";

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
