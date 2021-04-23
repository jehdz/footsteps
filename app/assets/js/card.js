var locationsTest = [
        {
            "name": "Al Capone Got his Haircut Here",
            "description": "In this hotel’s basement throughout the 1920’s, a windowless, marble-walled barber shop provided a haircut — as well as a secret meeting space — for Capone and his inner circle. The Greek-columned room is still in use, billed as a “palatial event space.”",
            "category": "Historical",
            "address": "The Blackstone Hotel, 636 S. Michigan Ave., Chicago, IL. 60605",
            "latitude": 41.8737,
            "longitude": -87.62455,
            "img": "https://lh3.googleusercontent.com/proxy/pRdBTNiwCub63iINMAYfrCWj9zQkadPetKFe-FSr5jvnIdgbRZOIgt8hGi31eXvOwHoh4fz5Ge7_4GvsgMjpJ_VyNkWsfGhJJC0-y2vFYrRrlhkxOBQNhotiAtfshskZwH_2qdU2PCS8voCNjutZA3iLN23fN3_kyQ",
            "source": "https://en.wikipedia.org/wiki/The_Blackstone_Hotel",
            "author": "Henry Martin"
        },
        {
            "name": "Watertower Place",
            "description": "A shopping mall with 7 stories of different stores. Visit the food court on L1 for an array of cafeteria style dining.",
            "category": "Shopping",
            "address": "835 N Michigan Ave, Chicago, IL 60611",
            "latitude": 41.8986,
            "longitude": -87.62285,
            "img":"https://i.pinimg.com/originals/24/a7/87/24a7877696267112a06815e89f997e14.jpg" ,
            "source": "https://www.google.com/maps/place/Water+Tower+Place/@41.89793,-87.631626,15z/data=!3m2!4b1!5s0x880fd3546416dcb7:0x3333a570ff1df010!4m5!3m4!1s0x880fd35383aa0379:0xe132dc09c888b814!8m2!3d41.8979303!4d-87.6228927",
            "author": "Oscar Yanek"
        }
    ]




/////// /////// /////// /////// /////// ///////
/////// /////// /////// /////// /////// ///////
/////// /////// /////// /////// /////// ///////


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


/////// /////// /////// /////// /////// //////



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



