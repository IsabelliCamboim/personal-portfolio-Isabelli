const links = document.querySelectorAll('nav a[data-page]');
const pages = document.querySelectorAll('.page');

links.forEach((link) => {
  link.addEventListener('click', (e) => {

    console.log('Link clicked:', link.getAttribute('data-page'));
    e.preventDefault();

    const targetId = link.getAttribute('data-page');
    const targetPage = document.getElementById(targetId);

    if (!targetPage) return;

    pages.forEach((page) => page.classList.remove('active'));
    targetPage.classList.add('active');
  });
});