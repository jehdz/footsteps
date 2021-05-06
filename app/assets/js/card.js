function cardTemplate(location) {

    if ( location.latitude === 41.8737 && location.longitude === -87.62455) {
        return `
    <div class="location">
        <h2 class="location-name">${location.name} <span class="category">(${location.category})</span></h2>
        <img class="location-image" src="${location.img}" >
        <br> <br>  <br> 
        <p class="location-description"> ${location.description} </p> <br>
        <p>
        <strong>Address:</strong> ${location.address} <br>
        <strong>Latitude:</strong> ${location.latitude} 
        <strong>Longitude:</strong> ${location.longitude}
        </p> <br>
        <p> <a href="${location.source}" target="_blank"> <strong>Learn More </strong> </a> </p> <br>
     </div>`;
    }


}


///// /////// /////// /////// /////// //////



// Get the modal
var modal = document.getElementById("card");

// Get the button that opens the modal
var markerBtn = document.getElementById("marker");

// Get the <span> element that closes the modal
var close = document.getElementById("closeCard");


// When the user clicks the button, open the modal
markerBtn.addEventListener('click', () => {
    modal.style.display = "block";

    document.getElementById("cardData").innerHTML = `
     ${locationsTest.map(cardTemplate).join("")} `;  //This displays the card template on the modal
});

// When the user clicks on <span> (x), close the modal

close.addEventListener('click', () => {
    modal.style.display = "none";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}











