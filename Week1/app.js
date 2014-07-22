var MongoClient = require('mongodb').MongoClient;

//CONNECTIONS
var connectionLocal = 'mongodb://' + process.env.IP + '/' + process.env.PORT + '';
var connectionExternal = 'mongodb://admin:arc202020@ds048537.mongolab.com:48537';

MongoClient.connect(connectionExternal, function(err, db) {

    if(err) throw err;

    // Find one document in our collection
    db.collection('coll').findOne({}, function(err, doc) {

        // Print the result
        console.dir(doc);

        // Close the DB
        db.close();
    });

    // Declare success
    console.dir("Called findOne!");
});
