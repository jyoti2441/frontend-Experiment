let textBox = document.getElementById("textBox");
let counter = document.getElementById("counter");
let maxLimit = 100;
textBox.addEventListener("input", function () {

    let typed = textBox.value.length;
    let left = maxLimit - typed;

    counter.textContent = "Characters left: " + left;

    counter.classList.remove("green", "orange", "red");

    if (left > 60) {
        counter.classList.add("green");   
    } 
    else if (left > 20) {
        counter.classList.add("orange");  
    }
    else {
        counter.classList.add("red");   
    }
});
