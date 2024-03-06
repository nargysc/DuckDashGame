
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

if(localStorage.getItem('score')) {
    score = parseInt(localStorage.getItem('score'));
    button.innerHTML = "Score " + score;
    console.log('score');
}
button.addEventListener('click', function(){
    
const flowerImages = ['files/flower1.jpg', 'files/flower2.jpg', 'files/flower3.jpg'];

let currentFlowerIndex = 0;

function updateCursorPos(e) {
    // Prevent default touch behavior
    e.preventDefault();
    
    if (e.touches) {
        // Touch event
        const touch = e.touches[0]; // Get the first touch event
        moveCursor(touch.pageX, touch.pageY); // Move cursor to touch position
    } else {
        // Click event (for non-touch devices)
        moveCursor(e.pageX, e.pageY); // Move cursor to click position
    }
}

// Function to move cursor to specified position
function moveCursor(x, y) {
    cursor.style.left = x + "px"; // Update cursor position horizontally
    cursor.style.top = y + "px"; // Update cursor position vertically
}

// Add touch event listener to the window
window.addEventListener('touchmove', updateCursorPos);

// Add click event listener to the window (for non-touch devices)
window.addEventListener('click', updateCursorPos);
window.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
});

window.addEventListener('click', function (e) {
    if (e.target === duck) {
        score++;
        button.innerHTML = "Score " + score;
        localStorage.setItem('score', score); // Store the updated score in localStorage
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
            // Clicked on the cursor (duck element)
            missedCount++;
            if (missedCount >= maxMissedCount) {
                gameOver();
            }
            unsuccessfulAttempts++; 
            if (unsuccessfulAttempts >= maxUnsuccessfulAttempts) {
                gameOver(); 
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

function resetGame() {
    score = 0;
    missedCount = 0;
    unsuccessfulAttempts = 0;
    button.innerHTML = "Score " + score;
    localStorage.removeItem('score'); // Remove the stored score
    const flowers = document.querySelectorAll('.flower');
    flowers.forEach(function (flower) {
        flower.remove();
    });
}

function gameOver() {
    alert("Game Over! You missed the duck 5 times.");
    resetGame();
}