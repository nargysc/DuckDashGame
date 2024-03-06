
const duck = document.querySelector('.duck');
const cursor = document.querySelector('.cursor');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const container = document.querySelector('.container');
let score = 0;
let missedCount = 0;
let unsuccessfulAttempts = 0; 

const maxMissedCount = 5;
const maxUnsuccessfulAttempts = 5;
button.addEventListener('click', function(){
const flowerImages = ['flower1.jpg', 'flower2.jpg', 'flower3.jpg'];

let currentFlowerIndex = 0;

window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

window.addEventListener('click', function (e) {
    if (e.target === duck) {
        score++;
        button.innerHTML = "Score " + score;
        const newFlower = document.createElement('img');
        newFlower.classList.add('flower');
        newFlower.src = flowerImages[currentFlowerIndex];
        currentFlowerIndex = (currentFlowerIndex + 1) % flowerImages.length;
        container.appendChild(newFlower); 
        newFlower.style.top = e.pageY - 50 + "px"; 
        newFlower.style.left = e.pageX - 50 + "px"; 
        setTimeout(function () {
            newFlower.style.display = 'none';
        }, 500);
        audio.play();
           unsuccessfulAttempts = 0; 
        } else {
            missedCount++;
            if (missedCount >= maxMissedCount) {
                gameOver();
            }
            unsuccessfulAttempts++;
            if (unsuccessfulAttempts >= maxUnsuccessfulAttempts) {
                gameOver(); 
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
});

function resetGame() {
    score = 0;
    missedCount = 0;
    unsuccessfulAttempts = 0;
    button.innerHTML = "Score " + score;
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(function (flower) {
        flower.remove();
    });
}

function gameOver() {
    alert("Game Over! You missed the duck 5 times.");
    resetGame();
}