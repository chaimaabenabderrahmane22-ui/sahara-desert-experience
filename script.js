const navbar = document.querySelector('.navbar');
const cards = document.querySelectorAll('.card');

function setGreeting() {
    const hours = new Date().getHours();
    const heroTitle = document.querySelector('.hero-section h1');

    if (heroTitle) {
        if (hours < 12) {
            heroTitle.innerText ="صباح الخير! أهلاً بك في سحر الصحراء";
        } else {
            heroTitle.innerText = "مساء الخير! أهلاً بك في سحر الصحراء";
        }
    }
}

setGreeting();

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(18, 12, 10, 0.95)';
        navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
    } else {
        navbar.style.background = 'rgba(18, 12, 10, 0.7)';
        navbar.style.boxShadow = 'none';
    }
});

cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transition = 'transform 0.2s ease';
        card.style.transform = 'scale(1.03)';

        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});
    
alert("صباح الخير");