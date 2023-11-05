const parallax = document.querySelector('.window-wrapper');
const theWindow = document.querySelector('.window');
const theBackground = document.querySelector('.background');


const windowFactor = 550;
const backgroundFactor = 150;

parallax.addEventListener('mousemove', e => {

    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerWidth / 2;

    theWindow.style.transform = `
    translate(
        ${x / windowFactor}%,
        ${y / windowFactor}%
    )`;

    theBackground.style.transform = `
    translate(
        ${x / backgroundFactor}%,
        ${y / backgroundFactor}%
    )`;
}); 