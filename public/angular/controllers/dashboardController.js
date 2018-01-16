app.controller('dashboardController',['$http','$location','$timeout','$scope','$q','mapService','$routeParams',function($http,$location,$timeout,$scope,$q,mapService,$routeParams){
    $scope.query={};
    var main=this;
    this.filterPlace={};
    this.filterPlace.type = 'place';
    this.filterChar={};
    this.filterEvent={};
    this.filterEvent.type= 'event';
    this.filterChar.type = 'character';
    this.place=true;
    this.char=false;
    this.placeImageMarkers=[];
    this.charImageMarkers=[];
    this.eventImageMarkers=[];
    this.showCharIcon = false;
    this.name = "";
    this.url = '';
    this.abt='';
    this.help = false;
    this.placeMarkers = [];
    this.charMarkers = [];
    this.eventMarkers=[];

     var northEast = L.latLng(61.706801, 10.019531),
        southWest = L.latLng(49.176317, -17.753906),
        mybounds = L.latLngBounds(southWest, northEast);

    this.popup = function(name,title,id){
        var tour = new Tour({
          name:name,
          storage: false,
          template: "<div class='popover tour'><div class='arrow'></div><h3 class='popover-title'></h3></div>",
          steps: [
          {
            element: id,
            title: title
          }
        ]});

        // Initialize the tour
        tour.init();

        tour.start();
        setTimeout(function(){
            tour.end();
        },4000);
    };

    // initialize the map on the "map" div with a given center and zoom
    var map = L.map('map').setView([55.378051, -3.435973], 2);
    

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 28,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoiYWJoaWplZXQtanVuZWphIiwiYSI6ImNqYzZpM2pqYjBxdmsyd21xbThnc3h2bnQifQ.gAQs9p7K87AMP871d_6TWg'
    }).addTo(map);

    $(document).ready(function() { 
        // Instance the tour
    var tour = new Tour({
      name:'main',
      backdrop:true,
      steps: [
      {
        element: "#1",
        title: "Select Places on the Map",
        content: "Choose a place from the dropdown to visit the place and hover over it to get details."
      },
      {
        element: "#2",
        title: "Add locations on the map"
      },
      {
        element: "#3",
        title: "Characters on the map"
      },{
        element: "#4",
        title: "Places on the map"
      },{
        element: "#5",
        title: "Events in Philosopher's  Stone"
      },{
        element: "#6",
        title: "Events in Chamber of Secrets"
      },{
        element: "#7",
        title: "Events in Prizoner of Azkaban"
      },{
        element: "#8",
        title: "Events in Goblet of Fire"
      },{
        element: "#9",
        title: "Events in Order of Phoenix"
      },{
        element: "#10",
        title: "Events in Half-Blood Prince"
      },{
        element: "#11",
        title: "Events in Deathly Hallows"
      },{
        element: "#12",
        title: "Focus on Wizarding World"
      },{
        element: "#13",
        title: "Find Characters and events in the Map",
        content: "First select a location and then click this to find Characters and events in the Map"
      },{
        element: "#14",
        title: "Find Places on the map",
        content: "Click to go to places in the map"
      }
      ,{
        element: "#19",
        title: "Info box",
        content : 'Hover over a marker to show its info here'
      }
    ]});

    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();

     });


    

    



    this.alertHelp = function(){
        var latlng = map.getBounds();

        if(latlng._northEast.lat > northEast.lat || latlng._southWest.lat < southWest.lat || latlng._northEast.lng > northEast.lng || latlng._southWest.lng < southWest.lng)
        {
            $scope.$apply(function(){
                main.popup('ukzoom','Zoom towards UK for the Magical World','#12');
            });
            
        }
    };



    this.addRemoveImageForPlaces = function(){
        var zoom = map.getZoom();
        if(zoom == 10)
        {
            var j=0;
            for(var i=0;i<main.points.length;i++)
            {
                if(main.points[i].type=='place')
                {
                    var imageUrl = main.points[i].url,
                    imageBounds = [[parseFloat(main.points[i].lat) + 0.0372, parseFloat(main.points[i].lon)+0.0535], [parseFloat(main.points[i].lat)-0.0372, parseFloat(main.points[i].lon) - 0.0535]];
                    main.placeImageMarkers[j] = L.imageOverlay(imageUrl, imageBounds).addTo(map);
                    j++;
                }
            }
            }
        else
        {
            if(main.placeImageMarkers.length > 0)
            for(var i=0;i<main.placeImageMarkers.length;i++)
            {
                if(main.placeImageMarkers[i])
                map.removeLayer(main.placeImageMarkers[i]);
            }
        }
    };



    this.addRemoveImageForChars = function(){
        var zoom = map.getZoom();
        if(zoom >= 19)
          {
            var j=0;
            for(var i=0;i<main.points.length;i++)
            {
                if(main.points[i].type=='character')
                {
                    var imageUrl = main.points[i].url,
                    imageBounds = [[parseFloat(main.points[i].lat) + 0.00008, parseFloat(main.points[i].lon)+0.00009], [parseFloat(main.points[i].lat)-0.00008, parseFloat(main.points[i].lon) - 0.00009]];
                    main.charImageMarkers[j] = L.imageOverlay(imageUrl, imageBounds).addTo(map);
                    j++;
                }
                
            }
          }
        else
        {
            if(main.charImageMarkers.length > 0)
            for(var i=0;i<main.charImageMarkers.length;i++)
            {
                if(main.charImageMarkers[i])
                map.removeLayer(main.charImageMarkers[i]);
            }
        }
    };


    this.addRemoveVideoForEvents = function(){
        var zoom = map.getZoom();
        var center = map.getBounds();
        if(zoom >= 21)
          {
            var j=0;
            for(var i=0;i<main.points.length;i++)
            {               
                if(main.points[i].type=='event' && parseFloat(main.points[i].lat) < center._northEast.lat && parseFloat(main.points[i].lat) > center._southWest.lat && parseFloat(main.points[i].lon) < center._northEast.lng && parseFloat(main.points[i].lon) > center._southWest.lng)
                {
                    var imageUrl = main.points[i].url,
                    imageBounds = [[parseFloat(main.points[i].lat) + 0.00008, parseFloat(main.points[i].lon)+0.00009], [parseFloat(main.points[i].lat)-0.00008, parseFloat(main.points[i].lon) - 0.00009]];
                    if(main.eventImageMarkers[j]==null || main.eventImageMarkers[j]._map==null)
                    main.eventImageMarkers[j] = L.videoOverlay(imageUrl, imageBounds).addTo(map);
                    var element = main.eventImageMarkers[j].getElement();
                    console.log("added");
                    j++;
                } 
                else
                {
                    if(main.points[i].type=='event' && main.eventImageMarkers[j]!=null )
                    map.removeLayer(main.eventImageMarkers[j]);
                }               
            }
          }
        else
        {
            if(main.eventImageMarkers.length > 0)
            for(var i=0;i<main.eventImageMarkers.length;i++)
            {
                if(main.eventImageMarkers[i])
                map.removeLayer(main.eventImageMarkers[i]);
            }
        }
    };

    this.addRemoveMarkers = function(){
        var zoom = map.getZoom();
        if (zoom < 11) {
            $scope.$apply(function(){
                main.place = true;
                main.char = false;
            });
            for(var i=0;i<main.placeMarkers.length;i++)
            {
                map.addLayer(main.placeMarkers[i]);
            }
            for(var i=0;i<main.charMarkers.length;i++)
            {
                map.removeLayer(main.charMarkers[i]);
            }
            for(var i=0;i<main.eventMarkers.length;i++)
            {
                map.removeLayer(main.eventMarkers[i]);
            }
        } 
        else if (zoom >= 11) {
        
            $scope.$apply(function(){
                main.place=false;
                main.char=true;
                main.filterChar.associatedPlace = main.selectedPlace;
                main.filterEvent.associatedPlace = main.selectedPlace;
            });
            for(var i=0;i<main.placeMarkers.length;i++)
            {
                map.removeLayer(main.placeMarkers[i]);
            }
            for(var i=0;i<main.charMarkers.length;i++)
            {
                map.addLayer(main.charMarkers[i]);
            }
            for(var i=0;i<main.eventMarkers.length;i++)
            {
                map.addLayer(main.eventMarkers[i]);
            }
        }
        if(zoom>=21)
        {
            for(var i=0;i<main.eventMarkers.length;i++)
            {
                map.removeLayer(main.eventMarkers[i]);
            }
        }
    };



    map.on('zoomend', function() {

        var zoom = map.getZoom();
        if(zoom >8 && zoom<11)
            main.popup('char','Zoom a bit more to view Characters and Events!','#map');

        if(zoom > 14)
            main.popup('plac','Zoom out to view places again!','#map');

        //Call help
        main.alertHelp();

        //Call add remove images for places
        main.addRemoveImageForPlaces();

        //Call add remove images for chars
        main.addRemoveImageForChars();

        //Call add remove images for events
        main.addRemoveVideoForEvents();

        //Call add remove markers
        main.addRemoveMarkers();

    });


    map.on('movestart',function(){

        
        var latlng = map.getBounds();
        if(latlng._northEast.lat > northEast.lat || latlng._southWest < southWest.lat || latlng._northEast.lng > northEast.lng || latlng._southWest.lng < southWest.lng)
        {
            $scope.$apply(function(){
                main.popup('ukzoom','Move towards UK for the Magical World','#12');
            });
            
        }
        
    });

    this.setPlaceForChars = function(lat,lon,place){
        main.showCharIcon = true;
        main.latForChars = lat;
        main.lonForChars = lon;
        main.selectedPlace = place;
    };

    this.move = function(direction){
        var zoom = map.getZoom();
        var l = map.getCenter();
        var power = Math.pow(2,zoom)/zoom;
        var shift = 1/power;
        console.log(shift);
        if(direction == 'up')
        {
            setTimeout(function(){
                map.flyTo([l.lat  + shift,l.lng], zoom);
            },100);            
        }
        if(direction == 'down')
        {
            setTimeout(function(){
                map.flyTo([l.lat  - shift,l.lng], zoom);
            },100);            
        }
        if(direction == 'right')
        {
            setTimeout(function(){
                map.flyTo([l.lat,l.lng  + shift], zoom);
            },100);            
        }
        if(direction == 'left')
        {
            setTimeout(function(){
                map.flyTo([l.lat,l.lng  - shift], zoom);
            },100);            
        }

    };



    this.setView = function(lat,lon,zoom,id){
        if(id==5)
        {
            if(main.showCharIcon)
            {
                setTimeout(function(){
                    map.flyTo([main.latForChars, main.lonForChars], zoom);
                },10); 
            }
            else
            {
                main.popup('place','Please select a place first','#1');
            }
        }
        else
        setTimeout(function(){
            map.flyTo([lat, lon], zoom);
        },10); 
    };



    this.search = function(lat,lon,zoom){
        setTimeout(function(){
            map.flyTo([lat, lon], zoom);
        },10);       
    };


    this.displayInfo = function(location){
        for(var i=0;i<main.points.length;i++)
        {
            if(location.latlng.lat == main.points[i].lat && location.latlng.lng == main.points[i].lon)
            {
                $scope.$apply(function(){
                    main.name = main.points[i].name;
                    main.url = main.points[i].url;
                    main.abt = main.points[i].abt;
                });
            }
        }
    };

    this.getMapData = function(){
        mapService.getMap().then(function (data) {
            // body...
            if(data.data.error){
                console.log(data.data.message);
            }
            else{
                var shelterMarkers = new L.FeatureGroup();
                main.points = data.data.data;
                var j=0;
                var k=0;
                var l=0;
                for(var i=0;i<main.points.length;i++)
                {
                    var myIcon = L.icon({
                        iconUrl: main.points[i].icon,
                        iconSize: [10, 10],
                        popupAnchor: [-3, -76],
                    });
                    if(main.points[i].type == 'place')
                    {
                        main.placeMarkers[j] = L.marker([main.points[i].lat, main.points[i].lon],{icon: myIcon}).addTo(map).on('mouseover', main.displayInfo);
                        main.placeMarkers[j].bindTooltip(main.points[i].name);
                        j++;
                    }
                    else
                    {
                        if(main.points[i].type == 'character')
                        {
                            main.charMarkers[k] = L.marker([main.points[i].lat, main.points[i].lon],{icon: myIcon}).addTo(map).on('mouseover', main.displayInfo);
                            main.charMarkers[k].bindTooltip(main.points[i].name);
                            k++;
                        }
                        else
                        {
                            main.eventMarkers[l] = L.marker([main.points[i].lat, main.points[i].lon],{icon: myIcon}).addTo(map).on('mouseover', main.displayInfo);
                            main.eventMarkers[l].bindTooltip(main.points[i].name);
                            l++;
                        }
                        
                    }
                    
                }
                
            }
        });
    };    

    main.getMapData();


}]);











