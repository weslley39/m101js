var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/test', function(err, db) {
    "use strict";
    if(err) throw err;

    var images = db.collection("images"),
        albums = db.collection("albums");

    images.find({}, {'_id': 1}).each(function(err, doc){
        if(err) throw err;
        var image_id = doc['_id'];
        
        albums.find({'images': image_id}, function(err, result){
        if(err) throw err;
        if (!image_albums)
            images.remove({'_id': image_id}, function(err, numberOfRemoveds){
                if(err) throw err;
                console.log(numberOfRemoveds);
            })

        });
        console.log(image_albums);

    });
    console.log('Coompleted')

});