//execute after everything has loaded.

function getRandomColor() {
  return '#'+(Math.random()*0xFFFFFF<<0).toString(16);
}
function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: {
      'lat': 33.77679,
      'lng': -84.400279
    },
    mapTypeId: 'terrain'
  });
  for (i in shapes) {
    //process coordinates
    for (j in shapes[i]['coordinates']) {
      for (k in shapes[i]['coordinates'][j]) {
        shapes[i]['coordinates'][j][k] = new google.maps.LatLng(
          shapes[i]['coordinates'][j][k]['lat'],
          shapes[i]['coordinates'][j][k]['lng']);
      }
      shapes[i]['coordinates'][j] = new google.maps.MVCArray(shapes[i]['coordinates'][j]);
    }
    var coors = new google.maps.MVCArray(shapes[i]['coordinates'])
    var rndcolor = "#1133FF"
    var path = new google.maps.Polygon({
      paths: coors,
      strokeColor: rndcolor,
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: rndcolor,
      flilOpacity: 0.35
    });
    path.setMap(map);
  }
  for (i in o_shapes) {
    //process coordinates
    for (j in o_shapes[i]['coordinates']) {
      for (k in o_shapes[i]['coordinates'][j]) {
        o_shapes[i]['coordinates'][j][k] = new google.maps.LatLng(
          o_shapes[i]['coordinates'][j][k]['lat'],
          o_shapes[i]['coordinates'][j][k]['lng']);
      }
      o_shapes[i]['coordinates'][j] = new google.maps.MVCArray(o_shapes[i]['coordinates'][j]);
    }
    var ncoors = new google.maps.MVCArray(o_shapes[i]['coordinates'])
    var nrndcolor = "#333333"
    var npath = new google.maps.Polygon({
      paths: ncoors,
      strokeColor: nrndcolor,
      strokeOpacity: 0.8,
      strokeWeight: 3,
      fillColor: nrndcolor,
      flilOpacity: 0.35
    });
    npath.setMap(map);
  }
}
