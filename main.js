document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-section');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing the element after it has faded in
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  



  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-section1');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing the element after it has faded in
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });

  
  document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.fade-section3');
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing the element after it has faded in
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  
  

//  MENU

const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click', () => {
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden')
    }
})