// Script to add images on button click
const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.querySelector(".btn");
btnEl.addEventListener("click", () =>{
    imageNumber = 10;
    addNewImages();
});
// Function to add new images
function addNewImages(){
    for (let index = 0; index < imageNumber; index++) {
        const newImgEl = document.createElement("img");
        newImgEl.src = `https://picsum.photos/300?random=${Math.floor(Math.random() * 2000)}`;
        imageContainerEl.appendChild(newImgEl);
    }
}

// Script to update date and time dynamically
function updateDateTime() {
    const dateTimeEl = document.getElementById("date-time");
    const now = new Date();
    const formattedDate = now.toLocaleDateString();
    const formattedTime = now.toLocaleTimeString();
    dateTimeEl.innerHTML = `Current Time: ${formattedDate} ${formattedTime}`;
}

// Update date and time every second
setInterval(updateDateTime, 1000);
