// const hamButton = document.querySelector('#menu');
// const navigation = document.querySelector('.navigation');

// hamButton.addEventListener('click', () => {
// 	navigation.classList.toggle('active');
// 	hamButton.classList.toggle('open');
// });

function toggleNav() {
    const navbarCollapse = document.getElementById("navbar-collapse");
    navbarCollapse.classList.toggle("active");
}

document.getElementById("navbar-toggle").addEventListener("click", toggleNav);