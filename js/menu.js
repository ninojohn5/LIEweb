const menuBtn = document.querySelector('.navbar-toggler');
const menuItems = document.querySelector('.collapse.navbar-collapse');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

menuBtn.addEventListener('click', () => {
  menuItems.classList.toggle('show'); // Toggle the menu
});

// Close the menu when any of the menu items are clicked
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuItems.classList.contains('show')) {
      menuItems.classList.remove('show'); // Hide the menu
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');

  navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
          // Remove 'active' class from all nav links
          navLinks.forEach(function (link) {
              link.classList.remove('active');
          });

          // Add 'active' class to the clicked link
          this.classList.add('active');
      });
  });
});

////////////////////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove 'active' from all nav links
    const removeActiveClass = () => {
        navLinks.forEach(link => link.classList.remove('active'));
    };

    // Add 'active' to the clicked link and remove from others
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            removeActiveClass();
            this.classList.add('active');
        });
    });

    // Function to detect which section is in the viewport
    const setActiveOnScroll = () => {
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });

        // Remove active from all links and set on the visible section
        removeActiveClass();
        navLinks.forEach(link => {
            if (link.getAttribute('href').includes(currentSection)) {
                link.classList.add('active');
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', setActiveOnScroll);
});
