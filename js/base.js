try {
    const response = await fetch('/chris-king-arts/header.html');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const headerHtml = await response.text();
    document.getElementById('header-temp').innerHTML = headerHtml;
    const children = document.querySelector('#header-temp nav').children;
    for (const child of children) {
        if (document.title.includes(child.textContent)) {
            child.classList.add('active');
        }
    }
    const menuChildren = document.querySelector('#header-temp .menu').children;
    for (const child of menuChildren) {
        if (document.title.includes(child.textContent)) {
            child.classList.add('active-menu-button');
        }
    }
}
catch (error) {
    console.error('Error in header.js:', error);
}

try {
    const response = await fetch('/chris-king-arts/footer.html');
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const footerHtml = await response.text();
    document.getElementById('footer-temp').innerHTML = footerHtml;
}
catch (error) {
    console.error('Error in footer.js:', error);
}