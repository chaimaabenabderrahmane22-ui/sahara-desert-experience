const navbar = document.querySelector('.navbar');
const cards = document.querySelectorAll('.card');

function setGreeting() {
    const hours = new Date().getHours();
    const heroTitle = document.querySelector('.hero-section h1');
    const isMorning = hours < 12;
    const greetingText = isMorning 
        ? "صباح الخير! أهلاً بك في سحر الصحراء" 
        : "مساء الخير! أهلاً بك في سحر الصحراء";

    // تحديث العنوان في الصفحة إذا كان موجوداً
    if (heroTitle) {
        heroTitle.innerText = greetingText;
    }

    // إظهار التنبيه بالتحية المناسبة للوقت الحالي
    alert(isMorning ? "صباح الخير! أهلاً بك" : "مساء الخير! أهلاً بك");
}

// تشغيل التحية والـ alert
setGreeting();

// تغيير شكل القائمة عند التمرير
window.addEventListener('scroll', () => {
    if (navbar) { // التأكد من وجود العنصر أولاً
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(18, 12, 10, 0.95)';
            navbar.style.boxShadow = '0 4px 10px rgba(0,0,0,0.3)';
        } else {
            navbar.style.background = 'rgba(18, 12, 10, 0.7)';
            navbar.style.boxShadow = 'none';
        }
    }
});

// إضافة تأثير الضغط على الكروت
cards.forEach(card => {
    card.addEventListener('click', () => {
        card.style.transition = 'transform 0.2s ease';
        card.style.transform = 'scale(1.03)';

        setTimeout(() => {
            card.style.transform = 'scale(1)';
        }, 200);
    });
});