const hex = ["A", "B", "C", "D", "E", "F", "G", "H"];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += [getRandomHexColor()];
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomHexColor() {
    return Math.floor(Math.random() * hex.length);
}