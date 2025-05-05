let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrimg");
let qrText = document.getElementById("qrText");

function generateQR() {
    if (qrText.value.length > 0) {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img"); // ajouter la classe "show-img"
    }
}
