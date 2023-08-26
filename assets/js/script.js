document.getElementById('hamBtn').onclick = function () {

    document.getElementById('hamBtn').style.display = "none";
    document.getElementById('closeBtn').style.display = "flex";
    document.getElementById('mobileNav').style.display = "flex";
}


document.getElementById('closeBtn').onclick = function () {

    document.getElementById('hamBtn').style.display = "inherit";
    document.getElementById('closeBtn').style.display = "none";
    document.getElementById('mobileNav').style.display = "none";
}