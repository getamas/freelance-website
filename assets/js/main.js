let mobileNavTrigger = document.querySelector(".mobile-nav-trigger");
let nav = document.querySelector('.main-navigation .nav');

function mobileNavOpen(e) {
    if (!nav.classList.contains('mobile-nav-is-open')) {
      nav.classList.add('mobile-nav-is-open');
    } else {
      nav.classList.remove('mobile-nav-is-open');
    }
}

mobileNavTrigger.addEventListener('click', mobileNavOpen);

/* Contact Form action
let contactSection = document.querySelector('section.contact');
let contactForm = document.querySelector('.contact-form-container');
let contactContent = document.querySelector('.contact-title');

document.querySelector('.js-contact-action').addEventListener('click', contactSlide);

function contactSlide(e) {
  contactSection.classList.add('is-open');
  contactContent.classList.add('is-open');
  contactForm.classList.add('is-open');
}
*/

// Animated content

document.addEventListener('scroll', animate);

function animate(e) {

  // About section
  let about = document.querySelector('.about');

  if (window.scrollY > about.offsetTop - 200) {
    let bars = document.querySelectorAll('.bar .bar');
    for (let i = 0; i < bars.length; i++) {
      bars[i].classList.add('fill');
    }
  }

  // Work section
  let work = document.querySelector('.work');
  let firstProject = document.querySelector('.first-project');
  let secondProject = document.querySelector('.second-project');
  let thirdProject = document.querySelector('.third-project');
  let fourthProject = document.querySelector('.fourth-project');

  if (window.innerWidth > 960) {
    if (window.scrollY > work.offsetTop - 200) {
      firstProject.classList.add('animated', 'fadeInLeft');
    }

    if (window.scrollY > firstProject.offsetTop - 200) {
      secondProject.classList.add('animated', 'fadeInLeft');
    }

    if (window.scrollY > secondProject.offsetTop - 200) {
      thirdProject.classList.add('animated', 'fadeInLeft');
    }

    if (window.scrollY > thirdProject.offsetTop - 200) {
      fourthProject.classList.add('animated', 'fadeInLeft');
    }
  }

}

// Smooth scroll
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
