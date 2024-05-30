document.getElementById('openModalBtn').addEventListener('click', () => {
    const heroMainDiv = document.querySelector('.hero-main-div');
    const existingElement = document.querySelector('.hero-main-open');

    if (existingElement) {
        existingElement.remove();
        heroMainDiv.style.display = "block";
    } else {
        var newElement = document.createElement('div');
        newElement.className = 'hero-main-open';
        newElement.innerHTML = `
            <ul class="menu-items-opens">
                <li class="hero-social-li"><a href="https://www.instagram.com/goitclub/">Instagram</a></li>
                <li class="hero-social-li"><a href="https://www.facebook.com/goITclub/">Facebook</a></li>
                <li class="hero-social-li"><a href="#">LinkedIn</a></li>
            </ul>
        `;

        heroMainDiv.style.display = "none"; // скрытие элемента
        heroMainDiv.parentNode.insertBefore(newElement, heroMainDiv); // добавление нового элемента перед heroMainDiv
    }
});
