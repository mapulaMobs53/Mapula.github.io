
const cursor = document.querySelector('.cursor');
const cursorLazy = document.querySelector('.cursor-lazy');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorLazy.style.left = e.clientX + 'px';
    cursorLazy.style.top = e.clientY + 'px';
});

document.addEventListener('mouseover', () => {
    cursor.classList.add('active');
    cursorLazy.classList.add('active');
});

document.addEventListener('mouseout', () => {
    cursor.classList.remove('active');
    cursorLazy.classList.remove('active');
});

document.addEventListener("DOMContentLoaded", function() {
    const exploreButton = document.getElementById('explore-button');
    exploreButton.addEventListener('click', function() {
        document.getElementById('resume-section').scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const exploreButton = document.getElementById('explore-button');
    exploreButton.addEventListener('click', function() {
        document.getElementById('resume-section').scrollIntoView({ behavior: 'smooth' });
    });

    const aboutLink = document.getElementById('about-link');
    aboutLink.addEventListener('click', function(event) {
        event.preventDefault();
        const contactMenu = document.getElementById('contact-menu');
        contactMenu.style.display = 'block';
        contactMenu.scrollIntoView({ behavior: 'smooth' });
    });
});

//Contact functions will be here
document.addEventListener('DOMContentLoaded', function() {
    const contactButton = document.getElementById('contact-button');
    const contactOptions = document.getElementById('contact-options');
    const contactMode = document.getElementById('contact-mode');

    contactButton.addEventListener('click', function() {
        if (contactOptions.style.display === 'block') {
            contactOptions.style.display = 'none';
        } else {
            contactOptions.style.display = 'block';
        }
    });

    contactMode.addEventListener('change', function() {
        let url = '';
        let keepGoing = true;

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
        // Handle invalid mode selection
        console.error("Invalid contact mode selected:", mode);
        console.log(url);
    }
    } while (keepGoing);

    if (url) {
         window.open(url, '_blank');
        }

        if (url) {
            window.open(url, '_blank');
        }
    });

   //If the user did'nt make a selection, and somehow clicks outside it, I want the combox to close here:
    document.addEventListener('click', function(event) {
        if (!contactButton.contains(event.target) && !contactOptions.contains(event.target)) {
            contactOptions.style.display = 'none';
        }
    });
});

