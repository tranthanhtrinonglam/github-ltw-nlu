var buttons = []; // mang chua cac button
var currentButton = 1; // bien dai dien cho button tiep theo duoc nhan
// ham tao button
function createButtons() {
    var container = document.getElementById("game-container"); // goi toi id
    for (var i = 1; i <= 64; i++) {
        var button = document.createElement("button"); // tao button
        button.innerHTML = i; // gia tri cua no ung voi i
        button.classList.add("button"); // them lop css button
        button.setAttribute("data-button-number", i);  // luu duoi dang key-value
        button.addEventListener("click", checkButton); // add su kien
        container.appendChild(button); // them button vao container
        buttons.push(button); // add button vao mang chua cac button
    }
}

function checkButton() {
    var buttonNumber = parseInt(this.getAttribute("data-button-number")); // tro toi vi tri duoc nhan
    if (buttonNumber === currentButton) { // neu no dung voi gia tri khoi tao
        this.style.visibility = "hidden"; // an button
        currentButton++; // tang gia tri
    } else {
        alert("Sai button! Vui lòng nhấn vào button " + currentButton);
    }
}

createButtons();