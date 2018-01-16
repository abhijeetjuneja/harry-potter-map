// defining a mongoose schema 
// including the module
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
var titlize = require('mongoose-title-case');
// declare schema object.
var Schema = mongoose.Schema;

//Declare mapPoint model
var mapPointSchema = new Schema({

	name      : {type:String,default:'',required:true},
	icon      : {type:String,required:true},
	type      : {type:String,required:true},
	associatedPlace      : {type:String},
	lat       : {type:String,default:'',required:true},
    lon       : {type:String,default:'',required:true},
	url       : {type:String,default:'',required:true},
    abt       : {type:String,default:''},
    createdAt : {type:Date,default:Date.now()},

});

// Attach titlize
mapPointSchema.plugin(titlize, {
  paths: [ 'mapPointName' ]
});


//Export model
mongoose.model('mapPoint',mapPointSchema);

