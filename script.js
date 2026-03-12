$(document).ready(function() {
  $(".title").lettering();
  $(".buttos").lettering();
});





$(document).ready(function() {
  animation();
}, 1000);

$('.buttos').click(function() {
  animation();
});


function animation() {
  var title1 = new TimelineMax();
  title1.to(".buttos", 0, {visibility: 'hidden', opacity: 0})
  title1.staggerFromTo(".title span", 0.5, 
  {ease: Back.easeOut.config(1.7), opacity: 0, bottom: -80},
  {ease: Back.easeOut.config(1.7), opacity: 1, bottom: 0}, 0.05);
  title1.to(".buttos", 0.2, {visibility: 'visible' ,opacity: 1})
}

 // Header scroll effect
  window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const backToTop = document.getElementById('back-to-top');
    
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      backToTop.classList.add('show');
    } else {
      header.classList.remove('scrolled');
      backToTop.classList.remove('show');
    }
  });
  
  // Mobile menu toggle
  document.getElementById('burger-menu').addEventListener('click', function() {
    this.classList.toggle('show');
    document.getElementById('nav-links').classList.toggle('show');
  });
  
  // Close mobile menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      document.getElementById('burger-menu').classList.remove('show');
      document.getElementById('nav-links').classList.remove('show');
    });
  });
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const target = document.querySelector(this.getAttribute('href'));
      const headerHeight = document.getElementById('header').offsetHeight;
      
      window.scrollTo({
        top: target.offsetTop - headerHeight,
        behavior: 'smooth'
      });
    });
  });
  
  // Back to top button
  document.getElementById('back-to-top').addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Form submission (placeholder)
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    // Form handling logic would go here
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
  });
