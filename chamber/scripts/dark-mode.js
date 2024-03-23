function toggleDarkMode() {
        var desktop = document.getElementById('desktop');
        desktop.classList.toggle('dark-mode');
        var desktop1 = document.getElementsByClassName('window');
        desktop1.classList.toggle('dark-mode-window');
        var desktop2 = document.getElementById('taskbar');
        desktop2.classList.toggle('dark-mode-taskbar');
    
    }