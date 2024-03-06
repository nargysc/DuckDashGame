
const duck = document.querySelector('.duck');
const cursor = document.querySelector('.cursor');
const audio = document.querySelector('audio');
const button = document.querySelector('button');
const container = document.querySelector('.container');
let score = 0;
let missedCount = 0;
let unsuccessfulAttempts = 0; // Counter for unsuccessful attempts
const maxMissedCount = 5;
const maxUnsuccessfulAttempts = 6;

button.addEventListener('click', function(){
    

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
           unsuccessfulAttempts = 0; // Reset unsuccessful attempts counter
        } else {
            // Clicked on the cursor (duck element)
            missedCount++;
            if (missedCount >= maxMissedCount) {
                gameOver();
            }
            unsuccessfulAttempts++; // Increment unsuccessful attempts counter
            if (unsuccessfulAttempts >= maxUnsuccessfulAttempts) {
                gameOver(); // Game over if maximum unsuccessful attempts reached
            }
        
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

function gameOver() {
    // Perform actions when game is over
    alert("Game Over! You missed the basket 5 times.");
    // You can add more actions here such as resetting the game or redirecting to a new page
}