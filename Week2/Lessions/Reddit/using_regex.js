var MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://' + process.env.IP + ':27017/course', function(err, db){
	if (err) throw err;

	var query = {'title' : {'$regex' : 'NSA'}};

	var projection = {'title' : 1, '_id' : 0};

	db.collection('reddit').find(query, projection).each(function(err, doc){
		if(err) throw err;

        console.dir(doc);
		if(doc === null){
			return db.close();
		}

		console.dir(doc.title);
	});
});