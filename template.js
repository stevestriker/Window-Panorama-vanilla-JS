const parallax = document.querySelectorAll('.parallax');
const front = document.querySelector('.window');
const back = document.querySelector('.background');

const sFront = 150
const sBack = 400

///////// THIS WORKS  
const parallax = document.querySelector('.window-wrapper');
const theWindow = document.querySelector('.window');
const theBackground = document.querySelector('.background');


const windowFactor = 550;
const backgroundFactor = 300;

parallax.addEventListener('mousemove', e => {

    const x = e.clientX - window.innerWidth / 2;
    const y = e.clientY - window.innerWidth / 2;
    console.log(x);


    // const isInLeft = parseFloat(getComputedStyle(e).left) < window.innerWidth / 2 ? 1 : -1;

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

parallax.addEventListener('mousemove', e => {
    const xAxis = e.clientX
    const yAxis = e.clientY

    theWindow.style.transform = `
    translate(
        ${xAxis / winFax}%,
        ${yAxis / winFax}%
    )`

    theBackground.style.transform = `
    translate(
        ${xAxis /sceneFax}%,
        ${yAxis / sceneFax}%
    )`
})


// parallax.addEventListener('mousemove', e => {
//     const x =e.clientX
//     const y = e.clientY

//     front.style.transform = `
//     translate(
//         ${x /sFront}%,
//         ${y / sFront}%
//     )`

//     back.style.transform = `
//     translate(
//         ${x /sBack}%,
//         ${y / sBack}%
//     )`
// })
