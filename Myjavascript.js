document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorLazy = document.querySelector('.cursor-lazy');
    
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        cursorLazy.style.left = e.clientX + 'px';
        cursorLazy.style.top = e.clientY + 'px';
    });
    
    document.addEventListener('mouseover', function() {
        cursor.classList.add('active');
        cursorLazy.classList.add('active');
    });
    
    document.addEventListener('mouseout', function() {
        cursor.classList.remove('active');
        cursorLazy.classList.remove('active');
    });
    
    const exploreButton = document.getElementById('explore-button');
    if (exploreButton) {
        exploreButton.addEventListener('click', function() {
            document.getElementById('resume-section').scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    const aboutLink = document.getElementById('about-link');
    if (aboutLink) {
        aboutLink.addEventListener('click', function(event) {
            event.preventDefault();
            const contactMenu = document.getElementById('contact-menu');
            if (contactMenu) {
                contactMenu.style.display = 'block';
                contactMenu.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    const contactButton = document.getElementById('contact-button');
    const contactOptions = document.getElementById('contact-options');
    const contactMode = document.getElementById('contact-mode');
    
    if (contactButton && contactOptions && contactMode) {
        contactButton.addEventListener('click', function() {
            contactOptions.style.display = (contactOptions.style.display === 'block') ? 'none' : 'block';
        });
    
        contactMode.addEventListener('change', function() {
            let url = '';
            const mode = contactMode.value;
    
            do {
            const mode = contactMode.value;

            if (mode === 'email') {
                url = 'https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=masekwamengmapula5@gmail.com';
                keepGoing = false;
            } else if (mode === 'phone') {
                url = 'tel:+27 697 673 337';
                keepGoing = false;
            } else if (mode === 'linkedin') {
                url = 'https://www.linkedin.com/in/mapula-masekwameng-1513222b1';
                keepGoing = false;
            } else if (mode === 'github') {
                url = 'https://github.com/mapulaMobs53';
                keepGoing = false;
            } else {
                console.error("Invalid contact mode selected:", mode);
                console.log(url);
            }
        } while (keepGoing);

        if (url) {
            window.open(url, '_blank');
        }
    });

            if (url) {
                window.open(url, '_blank');
            }
        });
    
        // Close the combobox if user clicks outside it
        document.addEventListener('click', function(event) {
            if (!contactButton.contains(event.target) && !contactOptions.contains(event.target)) {
                contactOptions.style.display = 'none';
            }
        });
    }
});
