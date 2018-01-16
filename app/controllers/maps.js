var mongoose = require('mongoose');
var express = require('express');
var app         = express();
var http = require('http').Server(app);
mongoose.Promise = require('bluebird');
var eventEmitter = new events.EventEmitter();
var mapRouter  = express.Router();
var mapModel = mongoose.model('mapPoint');
var responseGenerator = require('./../../libs/responseGenerator');
var mapData = require('./../../libs/mapData');

//Export controller function
module.exports.controllerFunction = function(app) {


    //Get map by id
    mapRouter.get('/',function(req,res){

        var responsefromLib = mapData.getMapData();

        //begin map find
        mapModel.find({},function(err,map){
            if(err){
                var myResponse = responseGenerator.generate(true,"some error",err.code,null,null);          
                res.json( {myResponse});
            }
            else{
                //If map not found
                if(map == null || map == undefined)
                {
                    var myResponse = responseGenerator.generate(false,"No maps found",200,null,responsefromLib);
                    res.json(myResponse);
                }
                else
                {
                    responsefromLib.push.apply(responsefromLib, map);
                    //If successfully found return response
                    var myResponse = responseGenerator.generate(false,"Fetched maps",200,null,responsefromLib);
                    res.json(myResponse);
                }                     
            }

        });//end map model find 

    });//end get map by id


    //Create a map
    mapRouter.post('/marker/create',function(req,res){

        //Verify body parameters
        if(req.body.name!=undefined && req.body.type!=undefined && req.body.abt!=undefined && req.body.lat !=undefined  && req.body.lon !=undefined  && req.body.url !=undefined  && req.body.icon !=undefined ){

            var newmap = new mapModel({
                name            : req.body.name,
                type            : req.body.type,
                abt             : req.body.abt,
                lat             : req.body.lat,
                lon             : req.body.lon,
                url             : req.body.url,
                icon            : req.body.icon,
                associatedPlace : req.body.associatedPlace

            });// end new map 

            //Save map
            newmap.save(function(err,newmap){
                if(err){
                        var myResponse = responseGenerator.generate(true,err.errmsg,err.code,null);
                        console.log(myResponse);
                        res.json(myResponse);                                                
                }
                else{
                    var myResponse = responseGenerator.generate(false,"map created Successfully",200,null,null);
                    console.log(myResponse);
                    res.json(myResponse);
                }

            });//end new map save


        }
        //Fields not filled up
        else{
            var myResponse = {
                error: true,
                message: "Please fill up all the fields",
                status: 403,
                data: null
            };

            //res.send(myResponse);
            console.log(myResponse);
            res.json(myResponse);

        }
        

    });//end create map


    

    //name api
    app.use('/map', mapRouter);



 
};//end contoller code
