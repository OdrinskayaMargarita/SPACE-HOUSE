// import jsonMap from './../../uploads/map.json';
// import axios from 'axios';
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

export default () => {

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
// gsap.registerPlugin(ScrollToPlugin);
let blueColorMap = "#a2b7ce";

let stylesMap = [
    {
        "featureType": "administrative",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#444444"
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

let colorPointLocal = document.querySelectorAll('.point-local')
colorPointLocal.forEach(el => {
    let inner = el.querySelector('.point-local__value')
    let color = el.dataset.markerColor
    inner.style.backgroundColor = color;
});

const mainMapSearch = document.querySelectorAll('.main-map--init')
mainMapSearch.forEach(n => {

    let markersOnMap = [
        {
            "placeLat": 55.75067197263461,
            "placeLng": 37.58271038532258,
            "CenterCoordinatesAlldotsLat": 55.75,
            "zoomMapDefault": 13,
            "CenterCoordinatesAlldotsLng": 37.6167
        }
    ];

    initMap();

    function initMap() {

        let InforObj = [];
        let centerCords;
        let zoomMap;

        centerCords = new google.maps.LatLng(markersOnMap[0].placeLat, markersOnMap[0].placeLng),
        zoomMap = markersOnMap[0].zoomMapDefault;

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

        allDots();
        function allDots () {
            let latlngbounds = new google.maps.LatLngBounds();
            const listItems = document.querySelectorAll('.info-local__body-item')
            let activeMarker;


            for (let i = 0; i < listItems.length; i++) {
                let colorMarker = listItems[i].dataset.markerColor;
                let colorMarkerAct = "#d3d3d3";
                let colorMarkerTxt = listItems[i].dataset.markerColorTxt;
                let pointColorHtml = listItems[i].querySelector('.point-local__value')
                let pointValue = listItems[i].querySelector('.point-local')

                pointColorHtml.style.backgroundColor = colorMarker;
                pointColorHtml.style.color = colorMarkerTxt;
                let urlMarkerMap = {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 12,
                    fillColor: colorMarker,
                    strokeColor: colorMarker,
                    fillOpacity: 1,
                    strokeWeight: 1
                };
                let urlMarkerMapActive = {
                    path: google.maps.SymbolPath.CIRCLE,
                    scale: 12,
                    strokeColor: colorMarkerAct,
                    fillColor: colorMarker,
                    fillOpacity: 1,
                    strokeOpacity: 0.5,
                    strokeWeight: 48
                };

                let myLatlng = new google.maps.LatLng(listItems[i].dataset.lat, listItems[i].dataset.lng);

                let myLatlng1 = new google.maps.LatLng(officeLat, officeLng);

                let marker = new google.maps.Marker({
                    position: myLatlng,
                    map: myMap,
                    icon: urlMarkerMap,
                    label: {
                        text: `${i + 1}`,
                        color: colorMarkerTxt,
                        fontSize: "18px",
                    },
                    optimized: false
                });


                let marker1 = new google.maps.Marker({
                    position: myLatlng1,
                    map: myMap,
                    icon: officeMarkerMap
                });
                    // CODE
                var newWidth = window.innerWidth;
                if (newWidth >= 1025) {
                    let topOffset = 85
                    let topOffset2 = 90

                    marker.addListener("click", () => {

                        gsap
                        .to(window, {
                            duration: 1,
                            ease: "power2.out",
                            scrollTo: {
                                y: listItems[i],
                                offsetY: topOffset,
                            },
                        })

                    });

                    pointValue.addEventListener("click", () => {

                        gsap
                        .to(window, {
                            duration: 1,
                            ease: "power2.out",
                            scrollTo: {
                                y: listItems[i],
                                offsetY: topOffset,
                            },
                        })

                    });

                    let height = listItems[i].offsetHeight + 1
                    ScrollTrigger.create({
                        trigger: listItems[i],
                        // markers: true,
                        start: "top top+=" + topOffset2 + "px",
                        end: () => "+=" + height,
                        toggleClass: "_active",
                        onEnter: () => {
                            marker.setIcon(urlMarkerMapActive);
                            myMap.setZoom(16);
                            setTimeout(() => {
                                myMap.setZoom(17);
                            }, 50);
                            myMap.setCenter(myLatlng);
                        },
                        onEnterBack: () => {
                            marker.setIcon(urlMarkerMapActive);
                            myMap.setZoom(16);
                            setTimeout(() => {
                                myMap.setZoom(17);
                            }, 50);
                            myMap.setCenter(myLatlng);
                        },
                        onLeave: () => {
                            marker.setIcon(urlMarkerMap);
                        },
                        onLeaveBack: () => {
                            marker.setIcon(urlMarkerMap);
                            myMap.setCenter(latlngbounds.getCenter());
                            myMap.fitBounds(latlngbounds);
                        },
                    });
                } else {
                    let topOffset = Math.round((window.innerHeight / 3.333333) + 37)
                    let topOffset2 = Math.round((window.innerHeight / 3.333333) + 42)

                    marker.addListener("click", () => {

                        gsap
                        .to(window, {
                            duration: 1,
                            ease: "power2.out",
                            scrollTo: {
                                y: listItems[i],
                                offsetY: topOffset,
                            },
                        })

                    });

                    pointValue.addEventListener("click", () => {

                        gsap
                        .to(window, {
                            duration: 1,
                            ease: "power2.out",
                            scrollTo: {
                                y: listItems[i],
                                offsetY: topOffset,
                            },
                        })

                    });

                    let height = listItems[i].offsetHeight + 1
                    ScrollTrigger.create({
                        trigger: listItems[i],
                        // markers: true,
                        start: "top top+=" + topOffset2 + "px",
                        end: () => "+=" + height,
                        toggleClass: "_active",
                        onEnter: () => {
                            marker.setIcon(urlMarkerMapActive);
                            myMap.setZoom(16);
                            setTimeout(() => {
                                myMap.setZoom(17);
                            }, 100);
                            myMap.setCenter(myLatlng);
                        },
                        onEnterBack: () => {
                            marker.setIcon(urlMarkerMapActive);
                            myMap.setZoom(16);
                            setTimeout(() => {
                                myMap.setZoom(17);
                            }, 100);
                            myMap.setCenter(myLatlng);
                        },
                        onLeave: () => {
                            marker.setIcon(urlMarkerMap);
                        },
                        onLeaveBack: () => {
                            marker.setIcon(urlMarkerMap);
                            myMap.setCenter(latlngbounds.getCenter());
                            myMap.fitBounds(latlngbounds);
                        },
                    });
                }
                

                window.addEventListener("resize", () => {
                    var newWidth = window.innerWidth;
                    if (newWidth >= 1025) {
                        let topOffset = 85
                        let topOffset2 = 90
    
                        marker.addListener("click", () => {
    
                            gsap
                            .to(window, {
                                duration: 1,
                                ease: "power2.out",
                                scrollTo: {
                                    y: listItems[i],
                                    offsetY: topOffset,
                                },
                            })
    
                        });
    
                        pointValue.addEventListener("click", () => {
    
                            gsap
                            .to(window, {
                                duration: 1,
                                ease: "power2.out",
                                scrollTo: {
                                    y: listItems[i],
                                    offsetY: topOffset,
                                },
                            })
    
                        });
    
                        let height = listItems[i].offsetHeight + 1
                        ScrollTrigger.create({
                            trigger: listItems[i],
                            // markers: true,
                            start: "top top+=" + topOffset2 + "px",
                            end: () => "+=" + height,
                            toggleClass: "_active",
                            onEnter: () => {
                                marker.setIcon(urlMarkerMapActive);
                                myMap.setZoom(16);
                                setTimeout(() => {
                                    myMap.setZoom(17);
                                }, 50);
                                myMap.setCenter(myLatlng);
                            },
                            onEnterBack: () => {
                                marker.setIcon(urlMarkerMapActive);
                                myMap.setZoom(16);
                                setTimeout(() => {
                                    myMap.setZoom(17);
                                }, 50);
                                myMap.setCenter(myLatlng);
                            },
                            onLeave: () => {
                                marker.setIcon(urlMarkerMap);
                            },
                            onLeaveBack: () => {
                                marker.setIcon(urlMarkerMap);
                                myMap.setCenter(latlngbounds.getCenter());
                                myMap.fitBounds(latlngbounds);
                            },
                        });
                    } else {
                        let topOffset = Math.round((window.innerHeight / 3.333333) + 37)
                        let topOffset2 = Math.round((window.innerHeight / 3.333333) + 42)
    
                        marker.addListener("click", () => {
    
                            gsap
                            .to(window, {
                                duration: 1,
                                ease: "power2.out",
                                scrollTo: {
                                    y: listItems[i],
                                    offsetY: topOffset,
                                },
                            })
    
                        });
    
                        pointValue.addEventListener("click", () => {
    
                            gsap
                            .to(window, {
                                duration: 1,
                                ease: "power2.out",
                                scrollTo: {
                                    y: listItems[i],
                                    offsetY: topOffset,
                                },
                            })
    
                        });
    
                        let height = listItems[i].offsetHeight + 1
                        ScrollTrigger.create({
                            trigger: listItems[i],
                            // markers: true,
                            start: "top top+=" + topOffset2 + "px",
                            end: () => "+=" + height,
                            toggleClass: "_active",
                            onEnter: () => {
                                marker.setIcon(urlMarkerMapActive);
                                myMap.setZoom(16);
                                setTimeout(() => {
                                    myMap.setZoom(17);
                                }, 100);
                                myMap.setCenter(myLatlng);
                            },
                            onEnterBack: () => {
                                marker.setIcon(urlMarkerMapActive);
                                myMap.setZoom(16);
                                setTimeout(() => {
                                    myMap.setZoom(17);
                                }, 100);
                                myMap.setCenter(myLatlng);
                            },
                            onLeave: () => {
                                marker.setIcon(urlMarkerMap);
                            },
                            onLeaveBack: () => {
                                marker.setIcon(urlMarkerMap);
                                myMap.setCenter(latlngbounds.getCenter());
                                myMap.fitBounds(latlngbounds);
                            },
                        });
                    }
                    })
                // });

                latlngbounds.extend(marker.position);
                latlngbounds.extend(marker1.position);
            }

            let bounds = new google.maps.LatLngBounds();

            myMap.setCenter(latlngbounds.getCenter());
            myMap.fitBounds(latlngbounds);
        }

    };
});


}
