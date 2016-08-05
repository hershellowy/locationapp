$(document).ready(function(){


// share lightbox
	$("#share").click(function(){
		// body...
		lb();
	})

	function lb(){
		$("#lightbox").show()
	}


// close share lightbox 
	$("#closelb").click(function(){
		// body...
		clslb();
	})

	function clslb(){
		$("#lightbox").hide()
	}





// share lightbox
  $("#request").click(function(){
    // body...
    lb2();
  })

  function lb2(){
    $("#lightbox2").show()
  }


// close share lightbox 
  $("#closelb").click(function(){
    // body...
    clslb2();
  })

  function clslb2(){
    $("#lightbox2").hide()
  }





 // geolocation marker - X working 

 var map;
function initialize() {
  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);
  var mapOptions = {
    zoom: 4,
    center: myLatlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

  google.maps.event.addListener(map, 'click', function(event) {
    placeMarker(event.latLng);
  });
}

function placeMarker(location) {
  var marker = new google.maps.Marker({
      position: location,
      map: map
  });

  map.setCenter(location);
}




});