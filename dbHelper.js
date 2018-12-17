exports.makeMongoDBConnection = function(){
    var mongoose = require('mongoose');
    // var fs = require('fs');
    // const config = JSON.parse(fs.readFileSync("dbConfig.json"));
    // mongoose.connect(
    //     "mongodb+srv://"+config.mongoUser+":"+config.mongoPass
    //     + "@icluster-txko2.mongodb.net/test?retryWrites=true")
    //     .then()
    //     .catch();
    mongoose.connect(
        "mongodb://ifta:bridge1599@27.147.128.14:27017/appDb?retryWrites=true")
        .then()
        .catch();
}