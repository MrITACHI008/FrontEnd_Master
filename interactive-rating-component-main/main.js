const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you");

const submitButton = document.getElementById("submit"); 

const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");
submitButton.addEventListener("click",() => {
    thanksContainer.classList.remove("hidden");
    mainContainer.style.display = "none";
});

rates.forEach((rate) => {
    rate.addEventListener("click",() => {
        rating.innerHTML = rate.innerHTML
    })
})



