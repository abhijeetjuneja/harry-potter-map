//Declare the service

app.factory('mapService',function allData($http){

    var mapFactory={};

    //Factory to create map
    mapFactory.create = function(mapData){
        return $http.post('/maps/create',mapData);
    };

    //Factory to create question
    mapFactory.createMarker = function(markerData){
        return $http.post('/map/marker/create',markerData);
    };

    //Factory to create answer
    mapFactory.createAnswer = function(answerData,mapId,questionId){
        return $http.post('/maps/'+mapId+'/questions/'+questionId+'/answers/create',answerData);
    };

    //Factory to create map result
    mapFactory.createmapResult = function(resultData,mapId){
        return $http.post('/maps/'+mapId+'/results/create',resultData);
    };

    //Factory to get all maps
    mapFactory.getMap = function(){
        return $http.get('/map');
    };

    //Factory to get map by Id
    mapFactory.getmapById = function(mapId){
        return $http.get('/maps/view/'+ mapId);
    }; 

    //Factory to get maps by user Id
    mapFactory.getmapsByUserId = function(userId){
        return $http.get('/maps/users/'+ userId);
    };


    //Factory to get result by Id
    mapFactory.getResultById = function(resultId){
        return $http.get('/maps/results/view/'+ resultId);
    }; 



    //Factory to get results by user Id
    mapFactory.getResultsByUserId = function(userId){
        return $http.get('/maps/results/users/'+ userId);
    };

    //Factory to edit map
    mapFactory.editmap = function(mapData,mapId){
        return $http.put('/maps/edit/'+mapId,mapData);
    };

    //Factory to edit question
    mapFactory.editQuestion = function(questionData){
        return $http.put('/maps/questions/edit/'+questionData._id,questionData);
    };

    //Factory to delete question
    mapFactory.deleteQuestion = function(mapId,questionId){
        return $http.post('/maps/'+mapId+'/questions/delete/'+questionId);
    };

    //Factory to delete map
    mapFactory.deletemap = function(mapId){
        return $http.post('/maps/delete/'+mapId);
    };

    //Factory to delete results
    mapFactory.deleteResults = function(){
        return $http.post('/maps/results/delete/all');
    };

    return mapFactory;

});