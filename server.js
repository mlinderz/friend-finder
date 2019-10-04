var express = require('express');
var app = express();
var path = require('path');
var friends = require('./friends.js')

//making static assets
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : 'password',
//   database : 'prezidents_db'
// });
 
// connection.connect();
 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/public/home.html"));
});

app.get('/survey', function(req, res){
    res.sendFile(path.join(__dirname, "/public/survey.html"));
})
app.post('/survey', function(req, res){
    console.log('someone submitted their survey')
    console.log(req)
    var userScores = req.body.scores
    var bestMatch = {
        name: '',
        totalDifference: 100
    }
    
    for (var i = 0; i<friends.length; i++) {
        var difference = 0;
        console.log(friends[i])
        for (var j = 0; j<friends[i].scores.length; j++){
            var a = friends[i].scores[j];
            var b = userScores[j];
            difference += Math.abs(a-b)
        }
    if (difference < bestMatch.totalDifference){
        bestMatch.name = friends[i].name
        bestMatch.totalDifference = difference
    }    
    }
res.json(bestMatch)
})
// by default the forms use req.query so let's not fight it
//localhost:3000/insert?pres_name=justin
// app.get('/insert', function(req, res){
// 	// res.json(req.query);

// 	if (req.query.pres_name.length > 1){
// 		connection.query('INSERT INTO presidents (pres_name) VALUES (?)', [req.query.pres_name], function (error, results, fields) {
// 		  if (error) res.send(error)
// 		  else res.redirect('/');
// 		});
// 	}else{
// 		res.send('invalid name')
// 	}
// });


app.listen(3000, function(){
	console.log('listening on 3000');
});
