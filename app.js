
let button = document.getElementById("color-btn");
let background = document.getElementById("backgrounds");
let hex = document.getElementById("hex");

button.onclick = () => {
    function changingColor () {
        /* Found this code while googling and it was just soo ugly! I adapted it so that code displayed 
        actually looks like hex color code 
        "let rng = Math.floor(1000000 + Math.random() * 9000000).toString(16);"      */

        let rng = Math.floor(100 + Math.random() * 90).toString(16).toUpperCase();
        return rng;
    }

    let randomColour = `#${changingColor()}${changingColor()}${changingColor()}`;
    background.style.backgroundColor = randomColour;
    hex.innerHTML = `${randomColour}`;
    /* console.log(randomColour);  */ 
}