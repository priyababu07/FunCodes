const loveButton = document.getElementById('love-button');
const heart = document.getElementById('heart');
const crackers = document.getElementById('crackers');

loveButton.addEventListener('click', function() {
    heart.classList.add('clicked');
    setTimeout(function() {
        crackers.style.display = 'block';
        setTimeout(function() {
            crackers.style.display = 'none';
            heart.classList.remove('clicked');
        }, 2000);
    }, 1000);
});






