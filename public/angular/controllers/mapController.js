app.controller('mapController',['$location','mapService','$timeout','$scope','$q','$window','$routeParams',function($location,mapService,$timeout,$scope,$q,$window,$routeParams){
    

    this.createMarker = function(valid){
        if(valid){
            mapService.createMarker($scope.map.mapData).then(function(data){
                if(data.data.error){
                    toastr.error(data.data.error.message);
                }
                else{
                    toastr.success('Created Marker Successfully');
                    console.log(data.data.data);
                    $location.path('/dashboard');
                }
            });
        }
    }

}]);











