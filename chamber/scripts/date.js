let currentYear = new Date().getFullYear();
document.getElementById("copyYear").textContent = currentYear;
// let lastMod = new Date(document.lastModified);
// document.getElementById("lastModified").textContent = `Last Updated: ${lastMod}`;

let lastMod = new Date(document.lastModified);
let formattedDate = lastMod.toLocaleDateString(); // Get the date portion in the local format
document.getElementById("lastModified").textContent = `Last Updated: ${formattedDate}`;