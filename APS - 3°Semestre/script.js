document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.getElementById("mapa-brasil");

  // Acessa o conteúdo do SVG
  mapa.addEventListener("load", () => {
    const svgDoc = mapa.contentDocument;

    // Seleciona todos os estados pelo ID ou classe
    const estados = svgDoc.querySelectorAll('[id^="estado-BR"]');

    estados.forEach((estado) => {
      // Salva a cor original do estado
      const corOriginal = estado.style.fill;

      // Adiciona evento de clique
      estado.addEventListener("click", () => {
        alert(`Você clicou no estado: ${estado.id}`);
      });

        // Adiciona efeito de hover
        estado.addEventListener("mouseover", () => {
          t_regiao = estado.className.animVal.split(" ")[1]
          
          regioes = svgDoc.querySelectorAll(`.${t_regiao}`)
          console.log(regioes)
          for (let i = 0; i < regioes.length; i++){
              regioes[i].style.fill = "#1f3b60"
          }
      });


      // Retorna à cor original no mouseout
      estado.addEventListener("mouseout", () => {
          t_regiao = estado.className.animVal.split(" ")[1]
          
          regioes = svgDoc.querySelectorAll(`.${t_regiao}`)
          console.log(regioes)
          for (let i = 0; i < regioes.length; i++){
              regioes[i].style.fill = corOriginal
          }
      });
    });
  });
});