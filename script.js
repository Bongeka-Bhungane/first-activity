document.querySelector('nav form').addEventListener('submit', (e) => {
    e.preventDefault();
    const searchValue = document.querySelector('nav input[type="search"]').value;
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id.toLowerCase().includes(searchValue.toLowerCase())) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
})

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            currentSection = section.getAttribute('id');
        }
    });
    document.querySelectorAll('nav a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === currentSection) {
            link.classList.add('active');
        }
    });
});