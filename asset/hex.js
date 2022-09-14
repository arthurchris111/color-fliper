const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E"]
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {

    let hexColor = "#"
    for (i = 0; i < 5; i++) {
        hexColor += [getRandomHexColor()];
    }

    color.textContent = hexColor
    document.body.style.backgroundColor = hexColor
})

function getRandomHexColor() {
    return Math.floor(Math.random() * hex.length);
}