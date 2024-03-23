function showBanner() {
    const today = new Date();
    const day = today.getDay();
    const banner = document.getElementById("banner");
    const closeButton = document.getElementById("closeBanner");
    if (day >= 1 && day <= 3) {
        banner.style.display = "flex";
    }
    closeButton.addEventListener("click", function() {
        banner.style.display = "none";
    });
}
    showBanner();