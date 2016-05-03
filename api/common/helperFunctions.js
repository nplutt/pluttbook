module.exports.getAuthTokenFromHeader = function(request, result){
    if(request.get('Authorization').indexOf('Bearer') === 0){
        return request.get('Authorization').substring(7, request.get('Authorization').length);
    }
    else{
        result.sendStatus(401);
    }
};

module.exports.getUnixTime = function(){
    var date = new Date();
    return Date.parse(date)/1000;
}