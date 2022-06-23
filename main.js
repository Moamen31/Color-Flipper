//make an array with numbers 0-9 and letters A-F
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]

//get elements
let color = document.querySelector(".color")
let btn = document.querySelector(".btn")

//function on btn
btn.addEventListener("click", function () {
    //create variable and add # in it
    let hexColor = "#"
    //we make for loop to go through the array
    //i < 6 cuz the result we want is only 6 plus the #
    //and number starts with 0
    for (i = 0; i < 6; i++) {
        //we add random 6 elements from the array to the hexcolor
        hexColor += hex[addRandomNumber()]

    }
    //the text inside the span will be the hex code
    color.textContent = hexColor;
    //change the body background color 
    document.body.style.backgroundColor = hexColor;
})

//make a function to get random number
function addRandomNumber() {
    return Math.floor(Math.random() * hex.length)
}