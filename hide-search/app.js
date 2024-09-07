const input = document.querySelector('.input');
const searchBtn = document.querySelector('.btn');
const search = document.querySelector('.search');

searchBtn.addEventListener('click', () => {
    search.classList.toggle('active');
    input.focus();
})