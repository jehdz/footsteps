// function initMap() {
//     const startLocation = { lat: 41.8737, lng: -87.62455 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 15,
//         center: startLocation,
//         panControl: true,
//         zoomControl: false,
//         mapTypeControl: false,
//         scaleControl: true,
//         streetViewControl: false,
//         overviewMapControl: false,
//         rotateControl: true
//     });
//
//
//     var locations = [
//         //{lat: 41.983616, long: -87.676339, scale: 10},
//         //{lat: 41.983643, long: -87.676432, scale: 10},
//         {lat: 41.999791, long: -87.674612, scale: 10},
//         {lat: 42.007860, long: -87.657758, scale: 10},
//
//     ];
//
//
//     //for (i=0; i < locations.length; i++){
//     var nextLat = locations[0].lat;
//     var nextLong = locations[0].long;
//
//     map.addListener("click",  () => {
//         map.setZoom(15);
//         map.setCenter(new google.maps.LatLng(nextLat, nextLong));
//         map.panTo(new google.maps.LatLng(nextLat, nextLong));
//     });
//
//     for(var i=0; i< locationData.length; i++) {
//         var currentPop = locationData.pop();
//         var marker = new google.maps.Marker({
//             position: new google.maps.LatLng(currentPop.latitude, currentPop.longitude),
//             map: map,
//             title: currentPop.name
//         });
//         console.log(marker.getPosition());
//
//         google.maps.event.addListener(marker, 'click', (function(marker, i) {return function() {
//             infowindow.setContent(locations[i][0]);
//             infowindow.open(map,marker);
//         }
//         })(marker, i));
//
//         // marker.addListener('click', () => {
//         //     console.log("you clicked on " + marker.getPosition());
//         // })
//     }
//
//     //}
//
//
//     //map.addListener("click", () => {
//     //  map.setZoom(15);
//     // map.panTo(new google.maps.LatLng(41.999791, -87.674612));
//     //});
// }





//function explore(){

//  for(var i in locations){
//    var nextLat = locations[i].lat;
//    var nextLong = locations[i].long;
//    map.addListener("click",()=>){
//      map.panTo(new google.maps.LatLng(nextLat, nextLong));
//    });
//  }

//  }

///////////



// This example displays a marker at the center of Australia.
// When the user clicks the marker, an info window opens.
function initMap() {
    const startLocation = {lat: 41.8737, lng: -87.62455};
    const map = new google.maps.Map(document.getElementById("map"), {
        center: startLocation,
        zoom: 15,
        panControl: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: true
    });

    map.addListener("click",  () => {
        map.setZoom(10);
//         map.setCenter(new google.maps.LatLng(nextLat, nextLong));
//         map.panTo(new google.maps.LatLng(nextLat, nextLong));
    });

    for (let i = 0; i < locationData.length; i++) {

        var latitude = locationData[i].latitude;
        var longitude = locationData[i].longitude;
        var name = locationData[i].name;
        var description = locationData[i].description;
        var source = locationData[i].source;
        var image = locationData[i].img;
        var address = locationData[i].address

        const contentString =
            `<div id="content" class="content" style="width: 350px; height:auto;">
                <div id="siteNotice">
                </div>
                <h1 id="firstHeading" class="firstHeading"> ${name} </h1>
                <div id="bodyContent">
                <p> <img class="info-img" src=${image}> </p>
                <p> ${description} </p>
                <br> 
                <p> ${address} </p>
                <p> Latitude: ${longitude} | Longitude: ${latitude}  </p>
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
