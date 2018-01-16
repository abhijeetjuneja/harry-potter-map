
app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){
    $routeProvider
        .when('/',{
            // location of the template
            templateUrl     : 'views/home-view.html'
        })
        .when('/marker/create',{
            // location of the template
            templateUrl     : 'views/create-marker-view.html',
            controller      : 'mapController',
            controllerAs    : 'map'
        })
        .when('/dashboard',{
            // location of the template
            templateUrl     : 'views/dashboard-view.html',
            controller      : 'dashboardController',
            controllerAs    : 'dashboard'
        })
        .when('/relive',{
            // location of the template
            templateUrl     : 'views/relive-view.html',
            controller      : 'reliveController',
            controllerAs    : 'relive'
        })
        .otherwise(
            {
                //redirectTo:'/'
                templateUrl   : 'views/error404.html'
            }
        );
        $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
}).hashPrefix('');
}]);
