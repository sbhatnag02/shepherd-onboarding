// Example
// Lets say you have a button element with the id="btn"
// const btn = document.getElementById("btn");
// btn.addEventListener("click", do_something);
// const do_something = () => {
//     console.log("The button has been clicked");
// }

// Todo:
// - Add js that uses DOM

document.getElementById("button").addEventListener("click", function () {
    document.getElementById("body").style.backgroundColor = randomColor();
    document.getElementById("name").style.color = randomColor();
    document.getElementById("basicInfo").style.color = randomColor();
    document.getElementById("facts").style.color = randomColor();
    document.getElementById("contact").style.color = randomColor();
    let items = document.getElementsByTagName("ul");
    let color = randomColor();
    for (var i = 0; i < items.length; i++) {
        items[i].style.color = color;
    }
})

function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return "#" + randomColor;
}

// Your code here