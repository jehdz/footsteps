function initMap() {
    const myLatlng = { lat: 41.8737, lng: -87.62455 };
    const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: myLatlng,
        panControl: true,
        zoomControl: false,
        mapTypeControl: false,
        scaleControl: true,
        streetViewControl: false,
        overviewMapControl: false,
        rotateControl: true
    });


    var locations = [
        //{lat: 41.983616, long: -87.676339, scale: 10},
        //{lat: 41.983643, long: -87.676432, scale: 10},
        {lat: 41.999791, long: -87.674612, scale: 10},
        {lat: 42.007860, long: -87.657758, scale: 10},

    ];


    //for (i=0; i < locations.length; i++){
    var nextLat = locations[0].lat;
    var nextLong = locations[0].long;

    map.addListener("click",  () => {


        map.setZoom(15);
        map.setCenter(new google.maps.LatLng(nextLat, nextLong));
        map.panTo(new google.maps.LatLng(nextLat, nextLong));
    });

    var marker, i;

    for(i=0; i< locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {return function() {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map,marker);
        }
        })(marker, i));
    }

    //}


    //map.addListener("click", () => {
    //  map.setZoom(15);
    // map.panTo(new google.maps.LatLng(41.999791, -87.674612));
    //});


}

//



//function explore(){

//  for(var i in locations){
//    var nextLat = locations[i].lat;
//    var nextLong = locations[i].long;
//    map.addListener("click",()=>){
//      map.panTo(new google.maps.LatLng(nextLat, nextLong));
//    });
//  }

//  }