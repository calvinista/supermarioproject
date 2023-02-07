// ETAPA 01 - ABRIR A MODAL COM O VÍDEO DO TRAILER

// 1 - IDENTIFICAR E PEGAR O ELEMENTO QUE INDICA O BOTÃO NA TELA USANDO O JS

const botaoTrailer = document.querySelector(".botao_trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


// 2 - IDENTIFICAR QUANDO O USUÁRIO CLICOU NO BOTÃO

botaoTrailer.addEventListener("click", () => {
    //4 - ABRIR A MODAL NA TELA
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

//3 - PEGAR O ELEMENTO DA MODAL NO JS


// ETAPA 02 - FECHAR A MODAL AO CLICAR NO X

// 1 - PEGAR ELEMENTO DE FECHAMENTO DA MODAL USANDO O JS


// 2 - IDENTIFICAR QUANDO O USUÁRIO CLICAR NA TELA
botaoFecharModal.addEventListener("click", () => {
    // 3 - FECHAR A MODAL
    modal.classList.toggle("aberto");  
    video.setAttribute("src", "");
});
