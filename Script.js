const parallax = document.querySelector('.window-wrapper');
const theWindow = document.querySelector('.window');
const theBackground = document.querySelector('.background');


const winXfact = 600;
const winYfact = 400
const sceneXfact = 300;
const sceneYfact = 100

parallax.addEventListener('mousemove', e => {

    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerWidth / 2;
    console.log(x);


    // const isInLeft = parseFloat(getComputedStyle(e).left) < window.innerWidth / 2 ? 1 : -1;

    theWindow.style.transform = `
    translate(
        ${x / winXfact}%,
        ${y / winYfact}%
    )`;

    theBackground.style.transform = `
    translate(
        ${x / sceneXfact}%,
        ${y / sceneYfact}%
    )`;
}); 