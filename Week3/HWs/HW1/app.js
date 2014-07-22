var MongoClient = require('mongodb').MongoClient;

var dropLowest = function(arry) {
	var minVal = Number.MAX_VALUE;
	var minIdx = -1;
	var newArray = [];

	for (i=0; i<arry.length; i++) {
		var val = arry[i]['score'];
		var type = arry[i]['type'];
		if (type === 'homework' && val < minVal) {
			minVal = val;
			minIdx = i;
		}
	}

	for (i=0; i<arry.length; i++) {
		if (i !== minIdx) newArray.push(arry[i]);
	}

	return newArray;
};

MongoClient.connect('mongodb://' + process.env.IP + ':27017/school', function(err, db){
	if (err) throw err;
	
    var dbcollection = 'students';
    console.log('Conectou');
    var students = db.collection(dbcollection);
    students.find().toArray(function(err, docs) {
        if(err) throw err;
        docs.forEach(function (doc) {
            doc.scores = dropLowest(doc.scores);
            students.update({'_id' : doc._id}, doc, {}, function(err, result){
                if(err) throw err;
            });
        });
        db.close();
    });
});