import axios from 'axios';

export default () => {
    const mainMapSearch = document.querySelectorAll('.my-map--init')
    if(!mainMapSearch){
        return;
    }

let blueColorMap = "#a2b7ce";

let stylesMap = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#000"
                // "color": "transparent"
            }
        ]
    },
    {
        "featureType": "administrative.country",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative.province",
        "elementType": "labels.icon",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2f2f2"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "saturation": -100
            },
            {
                "lightness": 45
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": blueColorMap
            },
            {
                "visibility": "on"
            }
        ]
    }
];

// let colorPointLocal = document.querySelectorAll('.point-local')
// colorPointLocal.forEach(el => {
//     let inner = el.querySelector('.point-local__value')
//     let color = el.dataset.markerColor
//     inner.style.backgroundColor = color;
// });
    
mainMapSearch.forEach(n => {
    let markersOnMap;
    axios.get(window.locationsJSON).then(response => {
        markersOnMap = Object.values(response.data);
        // console.log(Object.values(response.data));
                    // console.log("markers");

        initMap();

        function initMap() {

            let InforObj = [];
            let centerCords;
            let zoomMap;

            centerCords = new google.maps.LatLng(markersOnMap[0].centerCoord[0].placeLat, markersOnMap[0].centerCoord[0].placeLng),
            zoomMap = markersOnMap[0].centerCoord[0].zoomMapDefault;

            let options = {
                zoom: zoomMap,
                mapTypeId: google.maps.MapTypeId.ROADMAP,
                center: centerCords,
                zoomControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_BOTTOM
                },
                mapTypeControl: false,
                scaleControl: false,
                streetViewControl: false,
                rotateControl: false,
                fullscreenControl: false,
                styles: stylesMap
            };

            let myMap = new google.maps.Map(n, options);

            function defaultDot () {

                let myLatlng = new google.maps.LatLng(markersOnMap[0].centerCoord[0].placeLat, markersOnMap[0].centerCoord[0].placeLng);

                // let myLatlng1 = new google.maps.LatLng(officeLat, officeLng);

                let marker = new google.maps.Marker({
                    position: myLatlng,
                    map: myMap,
                    icon: markersOnMap[0].centerCoord[0].img,
                });
                myMap.setCenter(myLatlng);

            }

            defaultDot();

            // map nav
            // const bikeLayer = new google.maps.BicyclingLayer();
            let data1 = new google.maps.Data();
            function setBicycleRoute(map) {
                data1.loadGeoJson('https://api-ganges.tfl.gov.uk/CycleSuperhighway?status=Open&formatter=geojson', {},
                function(features) {
                    // console.log(cycleMap.data.getFeatureById(101));
                    // cycleMap.data.getFeatureById(101).setStyle({
                    //       strokeColor: 'red',
                    //       //strokeWeight: 1,
                    //       //strokeOpacity: 0.3
                    //   });
                }
                );
                // data1.setStyle(function(feature) {
                //     console.log(feature.getProperty());
                //     let ascii = data1.getFeatureById(101);
                //     let color = ascii > 91 ? 'red' : 'blue';
                //     return {
                //         fillColor: color
                //     };
                // });

                // Style it
                data1.setStyle({
                    strokeColor: '#747474',
                    //strokeWeight: 1,
                    //strokeOpacity: 0.3
                });

                myMap.setZoom(14);
                myMap.setCenter(centerCords);
                data1.setMap(map);

                // map.data.addListener('click', function(event) {
                //     map.data.overrideStyle(event.features, {fillColor: 'red'});
                // });
                // let sss = init;
                // map.data.setStyle({visible: sss});
                // console.log(map.data.features);
            }
            // data1.setMap(myMap)

            setBicycleRoute(myMap)

            let markers = [];

            function setAfoot(map) {
                let latlngbounds = new google.maps.LatLngBounds();

                let circleArray = markersOnMap[1].afoot

                for (let i = 0; i < circleArray.length; i++) {

                    // console.log(circleArray[i]);
                    let myLatlngSet2 = new google.maps.LatLng(circleArray[i].circlePlaceLat, circleArray[i].circlePlaceLng);
                    let myLatlngSetIcon2 = new google.maps.LatLng(circleArray[i].iconPlaceLat, circleArray[i].iconPlaceLng);

                    // latlngbounds.extend(marker1.position);
                    const cityCircle = new google.maps.Circle({
                        strokeColor: "#000",
                        strokeOpacity: 0.8,
                        strokeWeight: 1,
                        fillColor: "transparent",
                        // fillOpacity: 0.35,
                        map: map,
                        center: myLatlngSet2,
                        radius: circleArray[i].radius,
                    });

                    let marker = new google.maps.Marker({
                        position: myLatlngSetIcon2,
                        map: map,
                        icon: {
                            url: circleArray[i].img,
                            labelOrigin: { x: circleArray[i].positionNameX, y: circleArray[i].positionNameY}
                        },

                        // title: "Hello word"
                        label: {
                            text: circleArray[i].name,
                            // color: colorMarkerTxt,
                            fontSize: "16px",
                            fontWeight: "500",
                        },
                        // optimized: false
                    });

                    markers.push(marker);
                    markers.push(cityCircle);

                    let bounds = new google.maps.LatLngBounds();

                    latlngbounds.extend(marker.position);
                    // latlngbounds.extend(cityCircle.position);
                }

                // var lineCoordinates = [
                //     new google.maps.LatLng(22.291, 153.027),
                //     new google.maps.LatLng(18.291, 153.027)
                //   ];

                //   let line = new google.maps.Circle({
                //     path: myLatlngSet2,
                //     strokeOpacity: 0,
                //     icons: [{
                //       icon: lineSymbol,
                //       offset: '0',
                //       repeat: '20px'
                //     }],
                //     map: myMap
                //   });


                myMap.setCenter(latlngbounds.getCenter());
                myMap.fitBounds(latlngbounds);
            }

            function setAuto() {
                let latlngbounds = new google.maps.LatLngBounds();

                let autoArray = markersOnMap[2].auto

                for (let i = 0; i < autoArray.length; i++) {

                    // console.log(autoArray[i]);
                    let myLatlngSetIcon3 = new google.maps.LatLng(autoArray[i].iconPlaceLat, autoArray[i].iconPlaceLng);

                    // latlngbounds.extend(marker1.position);

                    let markerSet3 = new google.maps.Marker({
                        position: myLatlngSetIcon3,
                        map: myMap,
                        icon: {
                            url: autoArray[i].img,
                            labelOrigin: { x: autoArray[i].positionNameX, y: autoArray[i].positionNameY}
                        },

                        // title: "Hello word"
                        label: {
                            text: autoArray[i].name,
                            // color: colorMarkerTxt,
                            fontSize: "16px",
                            fontWeight: "500",
                        },
                        // optimized: false
                    });
                    markers.push(markerSet3);

                    let bounds = new google.maps.LatLngBounds();

                    latlngbounds.extend(markerSet3.position);
                    // latlngbounds.extend(cityCircle.center);

                    myMap.setCenter(latlngbounds.getCenter());
                    myMap.fitBounds(latlngbounds);
                }

            }

            function setRailway() {
                let latlngbounds = new google.maps.LatLngBounds();

                let railwayArray = markersOnMap[3].railway

                for (let i = 0; i < railwayArray.length; i++) {

                    // console.log(railwayArray[i]);
                    let infowindow = new google.maps.InfoWindow({
                        content: `<div class="my-inf">
                                    <div class="my-inf__name">${railwayArray[i].name}</div>
                                    <div class="my-inf__time">${railwayArray[i].time}</div>
                                    <div class="my-inf__img ${railwayArray[i].imgInnerClass}">
                                        <img src="${railwayArray[i].imgInner}" alt="img">
                                    </div>
                                </div>`
                    });

                    let myLatlngSetIcon4 = new google.maps.LatLng(railwayArray[i].iconPlaceLat, railwayArray[i].iconPlaceLng);

                    // latlngbounds.extend(marker1.position);

                    let markerSet4 = new google.maps.Marker({
                        position: myLatlngSetIcon4,
                        map: myMap,
                        icon: {
                            url: railwayArray[i].img,
                            // labelOrigin: { x: railwayArray[i].positionNameX, y: railwayArray[i].positionNameY}
                        },

                        // title: "Hello word"
                        // label: {
                        //     text: railwayArray[i].name,
                        //     // color: colorMarkerTxt,
                        //     fontSize: "16px",
                        //     fontWeight: "500",
                        // },
                        // optimized: false
                    });

                    infowindow.open(myMap,markerSet4);
                    markers.push(markerSet4);

                    latlngbounds.extend(markerSet4.position);
                    // latlngbounds.extend(cityCircle.center);

                    myMap.setCenter(latlngbounds.getCenter());
                    myMap.fitBounds(latlngbounds);
                }

            }

            function setAero() {
                let latlngbounds = new google.maps.LatLngBounds();

                let aerodromeArray = markersOnMap[4].aerodrome

                // console.log(aerodromeArray);

                n.classList.add('my-map--infowindow-second')

                for (let i = 0; i < aerodromeArray.length; i++) {

                    // console.log(aerodromeArray[i]);
                    let infowindow = new google.maps.InfoWindow({
                        content: `<div class="my-inf my-inf_aero">
                                    <div class="my-inf__img-arrow">
                                        <img src="${aerodromeArray[i].imgArrow}" alt="img">
                                    </div>
                                    <div class="my-inf__name">${aerodromeArray[i].name}</div>
                                    <div class="my-inf__time">${aerodromeArray[i].time}</div>
                                </div>`
                    });

                    let myLatlngSetIcon5 = new google.maps.LatLng(aerodromeArray[i].iconPlaceLat, aerodromeArray[i].iconPlaceLng);

                    let markerSet5 = new google.maps.Marker({
                        position: myLatlngSetIcon5,
                        map: myMap,
                        icon: aerodromeArray[i].img,
                    });
                    markers.push(markerSet5);

                    infowindow.open(myMap,markerSet5);

                    let bounds = new google.maps.LatLngBounds();

                    latlngbounds.extend(markerSet5.position);
                    // latlngbounds.extend(cityCircle.center);

                    myMap.setCenter(latlngbounds.getCenter());
                    myMap.fitBounds(latlngbounds);
                }

            }

            function setMapOnAll(myMap) {
                for (let i = 0; i < markers.length; i++) {
                    markers[i].setMap(myMap);
                }
            }

            function resetMapRoutes() {
                setBicycleRoute(null);
                // data1.setMap(null);
                setAfoot(null);
                setMapOnAll(null)
                // if(markerSet2 != null) {
                //     markerSet2.setMap(null);
                //     markerSet2 = null;
                // }
            }

            function setMapRouteEvetns() {
            let mapBtns = document.querySelectorAll('.main-map__nav-item');

            mapBtns.forEach((button) => {
                button.addEventListener('click', function(e) {
                    let isActiveBtn = this.classList.contains('_active');
                    if (isActiveBtn) return;

                    resetMapRoutes();

                    let mapRouteAttr = this.getAttribute('data-map-route');

                    if (mapRouteAttr === 'bicycle') {
                        setBicycleRoute(myMap);
                        // data1.setMap(null)
                    }
                    if (mapRouteAttr === 'afoot') {
                        setAfoot(myMap);
                    }
                    if (mapRouteAttr === 'automobile') {
                        setAuto();
                    }
                    if (mapRouteAttr === 'railway') {
                        setRailway();
                    }
                    if (mapRouteAttr === 'aerodrome') {
                        setAero();
                    }

                    for (let btn of mapBtns) {
                        btn.classList.remove('_active');
                    }

                    this.classList.add('_active');
                })
            })
            }

            setMapRouteEvetns();
        };
    })
});


    // let markersOnMap = [
    //     {
    //         "centerCoord": [
    //             {
    //                 "placeLat": 51.51480761845815,
    //                 "placeLng": -0.11953542657620855,
    //                 "img": "img/marker-map-office2.svg",
    //                 "zoomMapDefault": 15
    //             }
    //         ]
    //     },
    //     {
    //         "afoot": [
    //             {
    //                 "circlePlaceLat": 51.51480761845815,
    //                 "circlePlaceLng": -0.11953542657620855,
    //                 "radius": 300,
    //                 "img": "img/map-marker-afoot.svg",
    //                 "iconPlaceLat": 51.51480761845815,
    //                 "iconPlaceLng": -0.11453542657620855,
    //                 "name": "5 MINS",
    //                 "positionNameX": 50,
    //                 "positionNameY": 20,
    //             },
    //             {
    //                 "circlePlaceLat": 51.51480761845815,
    //                 "circlePlaceLng": -0.11953542657620855,
    //                 "radius": 600,
    //                 "img": "img/map-marker-afoot.svg",
    //                 "iconPlaceLat": 51.51480761845815,
    //                 "iconPlaceLng": -0.12753542657620855,
    //                 "name": "10 MINS",
    //                 "positionNameX": 55,
    //                 "positionNameY": 20,
    //             },
    //             {
    //                 "circlePlaceLat": 51.51480761845815,
    //                 "circlePlaceLng": -0.11953542657620855,
    //                 "radius": 900,
    //                 "img": "img/map-marker-afoot.svg",
    //                 "iconPlaceLat": 51.51480761845815,
    //                 "iconPlaceLng": -0.10553542657620855,
    //                 "name": "15 MINS",
    //                 "positionNameX": 55,
    //                 "positionNameY": 20,
    //             },
    //         ]
    //     },
    //     {
    //         "auto": [
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.512097941890865,
    //                 "iconPlaceLng": -0.12288376025654572,
    //                 "name": "COVENT GARDEN",
    //                 "positionNameX": 120,
    //                 "positionNameY": 23,
    //             },
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.517492706570536,
    //                 "iconPlaceLng": -0.11992260161564328,
    //                 "name": "HOLBORN",
    //                 "positionNameX": 90,
    //                 "positionNameY": 23,
    //             },
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.51824044531045,
    //                 "iconPlaceLng": -0.11148973715773977,
    //                 "name": "CHANCERY LANE",
    //                 "positionNameX": 115,
    //                 "positionNameY": 23,
    //             },
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.51101624142436,
    //                 "iconPlaceLng": -0.11427923430666459,
    //                 "name": "TEMPLE",
    //                 "positionNameX": 85,
    //                 "positionNameY": 23,
    //             },
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.5085188841043,
    //                 "iconPlaceLng": -0.1258020034033295,
    //                 "name": "CHARING CROSS",
    //                 "positionNameX": 115,
    //                 "positionNameY": 23,
    //             },
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.51145693726948,
    //                 "iconPlaceLng": -0.12814088947435112,
    //                 "name": "LEICESTER SQUARE",
    //                 "positionNameX": -80,
    //                 "positionNameY": 23,
    //             },
    //             {
    //                 "img": "img/map-marker-auto.svg",
    //                 "iconPlaceLat": 51.5163310166273,
    //                 "iconPlaceLng": -0.13007207980822214,
    //                 "name": "TOTTENHAM COURT ROAD",
    //                 "positionNameX": -110,
    //                 "positionNameY": 20,
    //             },
    //         ]
    //     },
    //     {
    //         "railway": [
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "iconPlaceLat": 51.5318578245751,
    //                 "iconPlaceLng": -0.12281938701188216,
    //                 "name": "KINGS CROSS",
    //                 "time": "12 MINS",
    //                 "imgInnerClass": "close"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "imgInner": "img/map-marker-railway1.svg",
    //                 "iconPlaceLat": 51.51873448011682,
    //                 "iconPlaceLng": -0.08174940243017713,
    //                 "name": "LIVERPOOL STREET",
    //                 "time": "18 MINS",
    //                 "imgInnerClass": "open"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "iconPlaceLat": 51.51157712624398,
    //                 "iconPlaceLng": -0.07767244483573202,
    //                 "name": "FENCHUCH  STREET",
    //                 "time": "20 MINS",
    //                 "imgInnerClass": "close"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "iconPlaceLat": 51.504124805323386,
    //                 "iconPlaceLng": -0.08338018551464846,
    //                 "name": "LONDON BRIDGE",
    //                 "time": "21 MINS",
    //                 "imgInnerClass": "close"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "iconPlaceLat": 51.50423165723095,
    //                 "iconPlaceLng": -0.10934396853623166,
    //                 "name": "WATERLOO",
    //                 "time": "17 MINS",
    //                 "imgInnerClass": "close"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "iconPlaceLat": 51.495094912865824,
    //                 "iconPlaceLng": -0.1458220109929968,
    //                 "name": "VICTORIA",
    //                 "time": "17 MINS",
    //                 "imgInnerClass": "close"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "imgInner": "img/map-marker-railway2.svg",
    //                 "iconPlaceLat": 51.51683842487772,
    //                 "iconPlaceLng": -0.1764206518482972,
    //                 "name": "PADDINGTON",
    //                 "time": "23 MINS",
    //                 "imgInnerClass": "open"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "iconPlaceLat": 51.52255305605033,
    //                 "iconPlaceLng": -0.16311689525913506,
    //                 "name": "EUSTON",
    //                 "time": "14 MINS",
    //                 "imgInnerClass": "close"
    //             },
    //             {
    //                 "img": "img/map-marker-railway.svg",
    //                 "imgInner": "img/map-marker-railway3.svg",
    //                 "iconPlaceLat": 51.52859371757487,
    //                 "iconPlaceLng": -0.13329644081688438,
    //                 "name": "ST PANCRAS",
    //                 "time": "13 MINS",
    //                 "imgInnerClass": "open"
    //             },
    //         ]
    //     },
    //     {
    //         "aerodrome": [
    //             {
    //                 "img": "img/map-marker-aero.svg",
    //                 "imgArrow": "img/arrow-top-map.svg",
    //                 "iconPlaceLat": 51.53518781025013,
    //                 "iconPlaceLng": -0.10089535530997039,
    //                 "name": "LONDON LUTON",
    //                 "time": "1HR 4 MINS"
    //             },
    //             {
    //                 "img": "img/map-marker-aero.svg",
    //                 "imgArrow": "img/arrow-top-right-map.svg",
    //                 "iconPlaceLat": 51.52963495363408,
    //                 "iconPlaceLng": -0.0718845833747608,
    //                 "name": "LONDON STANSTEAD",
    //                 "time": "1HR 3 MINS",
    //                 "imgInnerClass": "open"
    //             },
    //             {
    //                 "img": "img/map-marker-aero.svg",
    //                 "imgArrow": "img/arrow-right-map.svg",
    //                 "iconPlaceLat": 51.51254499231045,
    //                 "iconPlaceLng": -0.06244320789288789,
    //                 "name": "LONDON CITY AIRPORT",
    //                 "time": "45 MINS",
    //             },
    //             {
    //                 "img": "img/map-marker-aero.svg",
    //                 "imgArrow": "img/arrow-bottom-map.svg",
    //                 "iconPlaceLat": 51.487432483300225,
    //                 "iconPlaceLng": -0.13986248684424593,
    //                 "name": "LONDON GATWICK",
    //                 "time": "41 MINS",
    //             },
    //             {
    //                 "img": "img/map-marker-aero.svg",
    //                 "imgArrow": "img/arrow-left-map.svg",
    //                 "iconPlaceLat": 51.504959267494,
    //                 "iconPlaceLng": -0.1918758826807459,
    //                 "name": "HEATHROW",
    //                 "time": "1 HR 5 MINS",
    //             }
    //         ]
    //     }


    // ];


}
