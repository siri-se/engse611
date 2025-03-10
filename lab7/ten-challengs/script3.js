// Selecting the button element
let button = document.getElementById("toggleClassButton");

// Adding an event listener to the button
button.addEventListener("click", function() {
    // Selecting the paragraph element
    let paragraph = document.getElementById("example");
    
    // Changing the background color and font size of the paragraph
    paragraph.classList.toggle("new-class");
    paragraph.style.fontSize = "20px";
    console.log("Class changed!");
});