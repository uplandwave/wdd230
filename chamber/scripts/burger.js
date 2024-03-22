let taskbarItemsHidden = false;

// Hide all items in taskbar except start-menu
function hideTaskbarItems() {
    const taskbarItems = document.querySelectorAll('#taskbar > *:not(#start-menu)');
    taskbarItems.forEach(item => {
        item.style.display = 'none';
    });

    // Update the link on the start-menu button so the page doesn't reload
    const startMenuLink = document.querySelector('#start-menu a');
    startMenuLink.href = "#taskbar";

    taskbarItemsHidden = true;
}

// Show all items in the taskbar
function showTaskbarItems() {
    const taskbarItems = document.querySelectorAll('#taskbar > *:not(#start-menu)');
    taskbarItems.forEach(item => {
        item.style.display = 'block';
    });

    // Update the link on the start-menu button back to index.html
    const startMenuLink = document.querySelector('#start-menu a');
    startMenuLink.href = "./index.html";

    taskbarItemsHidden = false;
}

// If the window size is less than 852px, do the things
window.addEventListener('resize', () => {
    if (window.innerWidth < 853) {
        hideTaskbarItems();
    } else {
        showTaskbarItems();
    }
});

document.querySelector('#start-menu').addEventListener('click', (event) => {
    if (taskbarItemsHidden) {
        event.preventDefault(); // Prevent the default action (page reload)
    }
    showTaskbarItems();
});

// Init check on page load
if (window.innerWidth < 852) {
    hideTaskbarItems();
} else {
    showTaskbarItems();
}
