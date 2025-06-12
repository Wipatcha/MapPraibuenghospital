
function showPopup(imageSrc) {
    document.getElementById("popupImage").src = imageSrc;
    document.getElementById("popup").style.display = "block";
    document.getElementById("overlay").style.display = "block";
}
function hidePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";
}
