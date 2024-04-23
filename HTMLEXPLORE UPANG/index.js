
let navLinks = document.querySelectorAll('.desktop_nav a');
let sections = document.querySelectorAll('section');

navLinks.forEach((link, index) => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove('active'));
    sections.forEach(section => section.style.display = 'none');
    this.classList.add('active');
    sections[index].style.display = 'block';
  });
});
