let currentYear = new Date().getFullYear();
document.getElementById("copyYear").textContent = currentYear;

let lastMod = new Date(document.lastModified);
document.getElementById("lastModified").textContent = `Last Updated: ${lastMod}`;

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
	navigation.classList.toggle('active');
	hamButton.classList.toggle('open');
});