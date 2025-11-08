// Services page specific functionality
document.addEventListener('DOMContentLoaded', function() {
    initServiceFilter();
    initServiceAccordions();
    initServiceAnimations();
});

// Service Filter Functionality
function initServiceFilter() {
    const filterInput = document.querySelector('#service-filter');
    const serviceCards = document.querySelectorAll('.service-card');
    
    if (filterInput && serviceCards.length > 0) {
        filterInput.addEventListener('input', function(e) {
            const filterText = e.target.value.toLowerCase().trim();
            
            serviceCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('p').textContent.toLowerCase();
                const features = Array.from(card.querySelectorAll('.service-features li'))
                    .map(li => li.textContent.toLowerCase())
                    .join(' ');
                
                const cardText = title + ' ' + description + ' ' + features;
                
                if (filterText === '' || cardText.includes(filterText)) {
                    card.style.display = 'block';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, 50);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });

        // Clear filter when pressing Escape
        filterInput.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                this.value = '';
                this.dispatchEvent(new Event('input'));
            }
        });
    }
}

// Service Accordions for mobile
function initServiceAccordions() {
    if (window.innerWidth <= 768) {
        const serviceCards = document.querySelectorAll('.service-card');
        
        serviceCards.forEach(card => {
            const title = card.querySelector('h3');
            const content = card.querySelector('.service-content') || card;
            
            if (title && content) {
                title.style.cursor = 'pointer';
                title.addEventListener('click', function() {
                    content.classList.toggle('active');
                });
            }
        });
    }
}

// Service-specific animations
function initServiceAnimations() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in-up');
    });
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    .fade-in-up {
        animation: fadeInUp 0.6s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .service-card {
        transition: all 0.3s ease;
    }
`;
document.head.appendChild(style);