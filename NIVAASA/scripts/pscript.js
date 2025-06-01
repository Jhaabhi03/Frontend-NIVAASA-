document.addEventListener('DOMContentLoaded', () => {
    
    const favoriteButtons = document.querySelectorAll('.favorite-btn');
    favoriteButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active');
           
            if (button.classList.contains('active')) {
                 '💖'; 
            } else {
                '❤️';
            }
        });
    });

    
    const assistanceBtn = document.getElementById('personalizedAssistanceBtn');
    if (assistanceBtn) {
        assistanceBtn.addEventListener('click', () => {
            alert('Thank you! Our team will contact you shortly for personalized assistance.');
          
        });
    }

    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        
    });

});
