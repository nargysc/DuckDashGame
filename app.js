/*
const duck = document.querySelector('.duck'); // Corrected selector
const cursor = document.querySelector('.cursor');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const body = document.querySelector('body');
let score = 0;

const flowerImages = ['flower1.jpg', 'flower2.jpg', 'flower3.jpg'];
let currentFlowerIndex = 0;

const screenWidth = body.offsetWidth;
const screenHeight = body.offsetHeight;

window.addEventListener('mousemove', function(e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

// Create a new flower and move it with mouse
window.addEventListener('mousemove', function(e) {
    const flower = document.createElement('img');
    flower.classList.add('flower');
    flower.src = flowerImages[currentFlowerIndex];
    currentFlowerIndex = (currentFlowerIndex + 1) % flowerImages.length;
    flower.style.position = 'absolute';
    flower.style.left = e.pageX + 'px';
    flower.style.top = e.pageY + 'px';
    document.body.appendChild(flower);
});

// Click event listener for duck
window.addEventListener('click', function(e) {
    if (e.target.classList.contains('duck')) {
        score++;
        button.innerHTML = "Score " + score;

        const newFlower = document.createElement('img');
        newFlower.classList.add('flower');
        document.body.appendChild(newFlower);

        setTimeout(function() {
            newFlower.style.display = 'none';
        }, 400);
    }
    audio.play();
});

// Move duck randomly every second
setInterval(function() {
    const randLeft = Math.random() * screenWidth - 150;
    const randTop = Math.random() * screenHeight - 150;
    duck.style.left = randLeft + 'px';
    duck.style.top = randTop + 'px';
}, 1000);

const duck = document.querySelector('.duck');
const cursor = document.querySelector('.cursor');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
let score = 0;

const flowerImages = ['flower1.jpg', 'flower2.jpg', 'flower3.jpg'];

let currentFlowerIndex = 0;

window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('duck')) {
        score++;
        button.innerHTML = "Score " + score;
        const newFlower = document.createElement('img');
        newFlower.classList.add('flower');
        newFlower.src = flowerImages[currentFlowerIndex];
        currentFlowerIndex = (currentFlowerIndex + 1) % flowerImages.length;
        document.body.appendChild(newFlower);
        setTimeout(function () {
            newFlower.style.display = 'none';
        }, 500);
    }
    audio.play();
});

setInterval(function () {

    const randLeft = Math.random() * screenWidth - 150;
    const randTop = Math.random() * screenHeight - 150;
    duck.style.left = randLeft + 'px';
    duck.style.top = randTop + 'px';
}, 1000);

*/

const duck = document.querySelector('.duck');
const cursor = document.querySelector('.cursor');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const container = document.querySelector('.container');
let score = 0;

const flowerImages = ['flower1.jpg', 'flower2.jpg', 'flower3.jpg'];

let currentFlowerIndex = 0;

window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

window.addEventListener('click', function (e) {
    if (e.target === duck) {
        // Clicked on the basket (duck element)
        score++;
        button.innerHTML = "Score " + score;
        const newFlower = document.createElement('img');
        newFlower.classList.add('flower');
        newFlower.src = flowerImages[currentFlowerIndex];
        currentFlowerIndex = (currentFlowerIndex + 1) % flowerImages.length;
        container.appendChild(newFlower); // Append to the container div
        newFlower.style.top = e.pageY - 50 + "px"; // Adjust top position
        newFlower.style.left = e.pageX - 50 + "px"; // Adjust left position
        setTimeout(function () {
            newFlower.style.display = 'none';
        }, 500);
        audio.play();
    } else if (e.target === cursor) {
        // Clicked on the cursor (duck element)
        // Handle cursor click event here if needed
    }
});

setInterval(function () {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    const randLeft = Math.random() * screenWidth - 150;
    const randTop = Math.random() * screenHeight - 150;
    duck.style.left = randLeft + 'px';
    duck.style.top = randTop + 'px';
}, 1400);