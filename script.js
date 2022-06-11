const loveMe = document.querySelector('.loveMe');
const times = document.getElementById('times');


let clickTime = 0;
let timesClicked = 0;

// Creating my own double click rather than (dblclick function)
loveMe.addEventListener('click', (e) => {
    if(clickTime === 0) {
        clickTime = new Date().getTime();
        //console.log(clickTime);
    } else {
        if((new Date().getTime() - clickTime) < 800) {
            createHeart(e);
            clickTime = 0;
        } else {
            clickTime = new Date().getTime();
        }
    }
});

const createHeart = (e) => {
    const heart = document.createElement('i');
    heart.classList.add('fas');
    heart.classList.add('fa-heart');

    const posX = e.clientX;
    const posY = e.clientY; 
    //console.log(posX, posY);

    const leftOffset = e.target.offsetLeft;
    const topOffset = e.target.offsetTop;

    const xInside = posX - leftOffset;
    const yInside = posY - topOffset;
    //console.log(xInside, yInside);

    heart.style.top = `${yInside}px`;
    heart.style.left = `${xInside}px`;

    loveMe.appendChild(heart);

    // How many times i clicked
    times.innerHTML = ++timesClicked;
}