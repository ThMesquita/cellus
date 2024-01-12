// Ativar Links do Menu
const links = document.querySelectorAll('.header-menu a');

function ativarLink(link) {
    
    if (location.href.includes(link.href)) {
        link.classList.add('ativo');
    }
}

links.forEach(ativarLink);


// Galeria de fotos
const galeria = document.querySelectorAll('.localizacao-1-imagens img');
const galeriaContainer = document.querySelector('.localizacao-1-imagens');


function trocarImagem(event) {
    const img = event.currentTarget;
    const media = matchMedia('(min-width: 460px)').matches;
    
    if (media) {
        galeriaContainer.prepend(img);
    }
    
}

function eventosGaleria(img) {
    img.addEventListener('click', trocarImagem);
}

galeria.forEach(eventosGaleria);

// Animação

if(window.SimpleAnime){
    new SimpleAnime();
}
