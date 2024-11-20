document.addEventListener("DOMContentLoaded", function() {
    const balloonContainer = document.querySelector('.balloon-container');

    function createBalloon() {
        const balloon = document.createElement('img');
        balloon.src = 'images/hot-removebg-preview.png'; 
        balloon.classList.add('balloon');

        // Randomize size
        const size = Math.random() * (100 - 50) + 50; 
        balloon.style.width = `${size}px`;

        // Randomize starting position
        const leftPosition = Math.random() * (window.innerWidth - size); 
        balloon.style.left = `${leftPosition}px`;

        // Append balloon to the container
        balloonContainer.appendChild(balloon);

        // Remove balloon after animation ends
        balloon.addEventListener('animationend', () => {
            balloon.remove();
        });
    }

    for (let i = 0; i < 6; i++) { 
        setTimeout(createBalloon, i * 1000);
    }
});
