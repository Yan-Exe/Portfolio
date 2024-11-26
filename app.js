document.addEventListener('DOMContentLoaded', function() {
    const scrollReveal = ScrollReveal({
        origin: 'auto',
        distance: '5px', // Reduz a distância para começar a aparecer
        duration: 500, // Diminui o tempo para a animação
        reset: true
    });

    scrollReveal.reveal('.efeite-reveal', {
        interval: 100
    });
});

function toggleTexto() {
    var textoOculto = document.querySelector('.texto__oculto');
    var botao = document.querySelector('.ocultar__texto');
    var fotoSobreMim = document.querySelector('.sobre-mim__foto');

    if (textoOculto.style.display === "none" || textoOculto.style.display === "") {
        textoOculto.style.display = "block";
        botao.textContent = "Ver menos";

        if (window.innerWidth < 600) {
            fotoSobreMim.style.display = "none";
        }
    } else {
        textoOculto.style.display = "none";
        botao.textContent = "Ver mais";

        if (window.innerWidth < 600) {
            fotoSobreMim.style.display = "block";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.habilidades__cards').forEach(function(card) {
        card.style.display = 'block';
    });

    const swiper = new Swiper('.swiper', {
        spaceBetween: 5,
        slidesPerView: 1,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });
});
