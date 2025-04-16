document.addEventListener("DOMContentLoaded", () => {
  const mapa = document.getElementsByTagName("svg")[0];
  console.log(mapa)
  // Acessa o conteúdo do SVG
  mapa.addEventListener("load", () => {

    // Seleciona todos os estados pelo ID ou classe
    const estados = mapa.querySelectorAll('[id^="estado-"]');

    estados.forEach((estado) => {
      // Salva a cor original do estado
      const corOriginal = estado.style.fill;

      // Adiciona evento de clique
      estado.addEventListener("click", () => {
        alert(`Você clicou no estado: ${estado.id}`);
      });

      // Adiciona efeito de hover
      estado.addEventListener("mouseover", () => {
        estado.style.fill = "#77777780";
      });

      // Retorna à cor original no mouseout
      estado.addEventListener("mouseout", () => {
        estado.style.fill = corOriginal;
      });
    });
  });
});