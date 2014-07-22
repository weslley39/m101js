var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://' + process.env.IP +':27017/course', function(err, db) {
    if(err) throw err;

    var query = { 'grade' : 100 };

    db.collection('grades').find(query).toArray(function(err, docs) {
        if(err) throw err;

        console.log(docs);

        db.close();
    });
});
