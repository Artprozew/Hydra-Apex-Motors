const header = document.querySelector('.header-flex');
const main = document.querySelector('.header-padding');

const scrollHeaderStart = 20;

function handleScroll() {
    if (window.scrollY > scrollHeaderStart) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

// Adiciona padding-top na classe header-padding conforme tamanho do header para não tampar o conteúdo abaixo dele
function adjustContentPadding() {
    const headerHeight = header.offsetHeight;
    main.style.paddingTop = headerHeight + 'px';
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', adjustContentPadding);
document.addEventListener('DOMContentLoaded', adjustContentPadding);

handleScroll();
adjustContentPadding();