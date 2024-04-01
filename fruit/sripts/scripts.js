

function toggleNav() {
    const navbarCollapse = document.getElementById("navbar-collapse");
    navbarCollapse.classList.toggle("active");
}

document.getElementById("navbar-toggle").addEventListener("click", toggleNav);