function uicdropdownfunc() {
    document.getElementById("uicdropdown").classList.toggle("show");
}

function ucdropdownfunc() {
    document.getElementById("ucdropdown").classList.toggle("show");
}

function hudropdownfunc() {
    document.getElementById("hudropdown").classList.toggle("show");
}

function nudropdownfunc() {
    document.getElementById("nudropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matched('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}