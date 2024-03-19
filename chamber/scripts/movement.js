function closeWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    windowElement.style.display = 'none';
}

function startDrag(e, windowId) {
    var windowElement = document.getElementById(windowId);
    var offsetX = e.clientX - windowElement.getBoundingClientRect().left;
    var offsetY = e.clientY - windowElement.getBoundingClientRect().top;
    
    function dragMove(e) {
        var x = e.clientX - offsetX;
        var y = e.clientY - offsetY;
        windowElement.style.left = x + 'px';
        windowElement.style.top = y + 'px';
    }
    
    function dragEnd() {
        document.removeEventListener('mousemove', dragMove);
        document.removeEventListener('mouseup', dragEnd);
    }
    
    document.addEventListener('mousemove', dragMove);
    document.addEventListener('mouseup', dragEnd);
}

function toggleWindow(windowId) {
    var windowElement = document.getElementById(windowId);
    windowElement.style.display = windowElement.style.display === 'none' ? 'block' : 'none';
}

function goToHomePage() {
    // Redirect to the home page or perform any other action
    alert("Redirecting to the home page!");
}

function goToFullscreen(windowId) {
    var url = windowId + '.html';
    window.open(url, '_blank', 'fullscreen=yes');
}
function toggleDarkMode() {
    var desktop = document.getElementById('desktop');
    desktop.classList.toggle('dark-mode');
}
