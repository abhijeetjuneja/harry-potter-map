app.controller('reliveController',['$http','$location','$timeout','$scope','$q','mapService','$routeParams',function($http,$location,$timeout,$scope,$q,mapService,$routeParams){
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
    this.events=[];
    this.index=0;
    this.placeImageMarkers=[];
    this.charImageMarkers=[];
    this.eventImageMarkers=[];
    this.showCharIcon = false;
    this.ended = false;
    this.name = "";
    this.url = '';
    this.abt='';
    this.help = false;
    this.button = true;
    this.placeMarkers = [];
    this.charMarkers = [];
    this.eventMarkers=[];
     var northEast = L.latLng(61.706801, 10.019531),
        southWest = L.latLng(49.176317, -17.753906),
        mybounds = L.latLngBounds(southWest, northEast);


    // initialize the map on the "map" div with a given center and zoom
    var map = L.map('map1').setView([55.378051, -3.435973], 2);
    

    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 28,
        id: 'mapbox.dark',
        accessToken: 'pk.eyJ1IjoiYWJoaWplZXQtanVuZWphIiwiYSI6ImNqYzZpM2pqYjBxdmsyd21xbThnc3h2bnQifQ.gAQs9p7K87AMP871d_6TWg'
    }).addTo(map);

    var aud = document.getElementById("audio");
    aud.autoplay = true;
    aud.volume = 0.5;
    aud.onended = function() {
        aud.play();
    };

    this.convert = function(t){
        return Number(t)*1000;
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
                    main.eventImageMarkers[j] = L.videoOverlay(imageUrl, imageBounds,{loop:false}).addTo(map);
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

        //Call add remove images for events
        main.addRemoveVideoForEvents();

        //Call add remove markers
        main.addRemoveMarkers();

    });


    this.timeout = function(index,duration){
        setTimeout(function(){
            map.flyTo([main.events[index].lat,main.events[index].lon],23);
            index++;
            if(index == main.events.length)
            {
                $scope.$apply(function(){
                    main.ended = true;
                    setTimeout(function(){
                        $location.path('/dashboard');
                    },2000);
                });
                
            }
            main.timeout(index,main.convert(main.events[index].duration));
        },duration);
    };

    this.start = function(){
        main.button = false;
        main.timeout(0,2000);
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
                var m=0;
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
                            main.events[m]=main.points[i];
                            m++;
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











