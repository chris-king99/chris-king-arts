document.addEventListener('click', (event) => {
    const menuButton = event.target.closest('.nav-menu-button');

    if (!menuButton) return;
    menuButton.classList.toggle('active');
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
    const siteDimmer = document.querySelector('.site-dimmer');
    siteDimmer.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});