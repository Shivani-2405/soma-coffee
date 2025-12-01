// Generate random order ID
let randomID = "SOMA" + Math.floor(Math.random() * 900000 + 100000);
document.getElementById("orderID").textContent = randomID;

// Animate tracking progress
setTimeout(() => {
    document.querySelector("#packed").classList.add("done");
    document.querySelectorAll(".line")[1].classList.add("done");
}, 1500);

setTimeout(() => {
    document.querySelector("#shipped").classList.add("done");
    document.querySelectorAll(".line")[2].classList.add("done");
}, 3000);

setTimeout(() => {
    document.querySelector("#delivered").classList.add("done");
}, 5000);
