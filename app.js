
let button = document.getElementById("color-btn");
let background = document.getElementById("backgrounds");
let hex = document.getElementById("hex");

button.onclick = () => {
    function changingColor() {
        let rng = Math.floor(100 + Math.random() * 90).toString(16).toUpperCase();
        return rng;
    }

    let randomColour = `#${changingColor()}${changingColor()}${changingColor()}`;
    let secondRandomColour = `#${changingColor()}${changingColor()}${changingColor()}`;
    background.style.backgroundImage = `linear-gradient(${randomColour}, ${secondRandomColour})`
    // console.log(randomColour);
}