document.addEventListener("DOMContentLoaded", function() {
    var seeMoreButton = document.querySelector('.seemorebutton');
    seeMoreButton.addEventListener('click', toggleCards);
});

function toggleCards() {
    var cards = document.querySelectorAll('.card:nth-child(n+7)');
    var seeMoreText = document.querySelector('.seemorebutton span:first-child');

    cards.forEach(function(card) {
        card.classList.toggle('hidden');
    });

    if (seeMoreText.textContent === 'See More') {
        seeMoreText.textContent = 'See Less';
    } else {
        seeMoreText.textContent = 'See More';
    }
}


