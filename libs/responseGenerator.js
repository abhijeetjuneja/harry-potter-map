//Response Generator with token

exports.generate = function(error,message,status,token,data){

	var myResponse = {
                error: error,
                message: message,
                status: status,
                token: token,
                data:data
    };

    return myResponse;

};