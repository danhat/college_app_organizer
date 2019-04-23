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

function appFormPopup() {
    var popup = document.getElementById("appFormPop");
    popup.classList.toggle("show");
}

function essayPopup() {
    var popup = document.getElementById("essayPop");
    popup.classList.toggle("show");
}

function transPopup() {
    var popup = document.getElementById("transPop");
    popup.classList.toggle("show");
}

function testPopup() {
    var popup = document.getElementById("testPop");
    popup.classList.toggle("show");
}

function actPopup() {
    var popup = document.getElementById("actPop");
    popup.classList.toggle("show");
}

function recPopup() {
    var popup = document.getElementById("recPop");
    popup.classList.toggle("show");
}

function feesPopup() {
    var popup = document.getElementById("feesPop");
    popup.classList.toggle("show");
}

function changeMode() {
    var but = document.getElementById("mode_button");

    if (but.innerHTML == "View Mode") {
        but.innerHTML = "Edit Mode";
    }
    else {
        but.innerHTML = "View Mode";
    }
}



