var myMap = (function() {
  var init = function() {
    var centerMap = new google.maps.LatLng(48.46415738, 35.04757762),
      map = new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: centerMap,
        scrollwheel: false,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                hue: "#ff4400"
              },
              {
                saturation: -68
              },
              {
                lightness: -4
              },
              {
                gamma: 0.72
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.icon"
          },
          {
            featureType: "landscape.man_made",
            elementType: "geometry",
            stylers: [
              {
                hue: "#0077ff"
              },
              {
                gamma: 3.1
              }
            ]
          },
          {
            featureType: "water",
            stylers: [
              {
                hue: "#00ccff"
              },
              {
                gamma: 0.44
              },
              {
                saturation: -33
              }
            ]
          },
          {
            featureType: "poi.park",
            stylers: [
              {
                hue: "#44ff00"
              },
              {
                saturation: -23
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                hue: "#007fff"
              },
              {
                gamma: 0.77
              },
              {
                saturation: 65
              },
              {
                lightness: 99
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.stroke",
            stylers: [
              {
                gamma: 0.11
              },
              {
                weight: 5.6
              },
              {
                saturation: 99
              },
              {
                hue: "#0091ff"
              },
              {
                lightness: -86
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                lightness: -48
              },
              {
                hue: "#ff5e00"
              },
              {
                gamma: 1.2
              },
              {
                saturation: -23
              }
            ]
          },
          {
            featureType: "transit",
            elementType: "labels.text.stroke",
            stylers: [
              {
                saturation: -64
              },
              {
                hue: "#ff9100"
              },
              {
                lightness: 16
              },
              {
                gamma: 0.47
              },
              {
                weight: 2.7
              }
            ]
          }
        ]
      }),
      markerCommon = {
        url: "images/icons/map-marker.svg",
        size: new google.maps.Size(50, 50),
        sizeView: new google.maps.Size(50, 50)
      },
      markerLocals = [
        {
          location: new google.maps.LatLng(48.46659036, 35.0510323),
          contentTooltip: "Работаем с 9:00-18:00",
          contentBalloon: "Самые вкусные бургеры только у нас!"
        },
        {
          location: new google.maps.LatLng(48.46501107, 35.04289985),
          contentTooltip: "Работаем с 9:00-18:00",
          contentBalloon: "Самые вкусные бургеры только у нас!"
        },
        {
          location: new google.maps.LatLng(48.46262069, 35.06771564),
          contentTooltip: "Работаем с 9:00-18:00",
          contentBalloon: "Самые вкусные бургеры только у нас!"
        },
        {
          location: new google.maps.LatLng(48.46375898, 35.02986431),
          contentTooltip: "Работаем с 7:00-22:00",
          contentBalloon: "Самые вкусные бургеры только у нас!"
        }
      ],
      infowindow = new google.maps.InfoWindow();

    markerLocals.forEach(function(markerLocal) {
      var marker = new google.maps.Marker({
        position: markerLocal.location,
        icon: markerCommon.url,
        map: map,
        animation: google.maps.Animation.Drop,
        title: markerLocal.contentTooltip
      });

      marker.addListener("click", function() {
        infowindow.setContent(markerLocal.contentBalloon);
        infowindow.open(map, marker);
        marker.setAnimation(google.maps.Animation.BOUNCE);

        setTimeout(function() {
          marker.setAnimation(null);
        }, 2000);
      });
    });
  };

  return { init: init };
})();
