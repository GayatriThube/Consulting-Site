const hamMenu = document.querySelector('.ham-Menu');

const right = document.querySelector('.right');

hamMenu.addEventListener('click', () => {
    hamMenu.classList.toggle('active');
    right.classList.toggle('active');
})
