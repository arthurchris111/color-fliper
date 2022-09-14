const colors = ["red", "green", "rgb(133,122,200)", "#A52A2A"];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {

    const randomColor = getRandomColor()
    console.log(randomColor)

    document.body.style.backgroundColor = colors[randomColor]
    color.textContent = colors[randomColor]
})

const getRandomColor = () => {
    return Math.floor(Math.random() * colors.length);
}