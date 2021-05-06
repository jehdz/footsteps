function initMap() {
    const startLocation = {lat: 41.8737, lng: -87.62455};
    const map = new google.maps.Map(document.getElementById("map"), {
        center: startLocation,
        zoom: 15,
        panControl: true,
        zoomControl: true,
        mapTypeControl: true,
        scaleControl: true,
        streetViewControl: true,
        overviewMapControl: true,
        rotateControl: true
    });


    for (let i = 0; i < locationData.length; i++) {

        var latitude = locationData[i].latitude;
        var longitude = locationData[i].longitude;
        var name = locationData[i].name;
        var description = locationData[i].description;
        var source = locationData[i].source;
        var image = locationData[i].img;
        var address = locationData[i].address;

        const contentString =
            `<div id="content" class="content" style="width: 250px; height:300px;">

                <h1 id="firstHeading" class="firstHeading"> ${name} </h1>
                <div id="bodyContent" style="width: 100%;">
                <p> <img class="info-img" src=${image}> </p>
                <p> ${description} </p>
                <br> 
                <p> ${address} </p>
                <p> Latitude: ${longitude} | Longitude: ${latitude}  </p>
                
                <div class="like-section">
                    <span id="like-button" class="svg-btns"><i class="far fa-heart"> </i></span>  
                    <span id="comment-button"  class="svg-btns"><i class="far fa-comment"></i> </i></span> 
                    <span id="bookmark-button"  class="svg-btns"><i class="far fa-bookmark"></i> </i></span>           
                    
                 </div>
                <br> 
                <p> <a class="info-link" href=${source} target="_blank"> Learn more </a>
                </p>
                </div>
        </div>`;

        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(latitude, longitude),
            map: map,
            title: name
        });

        marker.addListener("click", () => {
            infowindow.open(map, marker);
        });

    }

}

initMap();
