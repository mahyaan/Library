
const express = require('express');
/**
 * MySql
 */
const mysql = require('mysql');
const app = express();

/**
 * Applications Middlewars
 */
require('./middlewares')(app);

/**
 * Applications Routes
 */
require('./routes')(app);


/**
 * Error Handlers
 */
require('./services/errorhandlers')(app);





/**
 * Connect to Mongo
 */
// const MongoClient = require('mongodb').MongoClient;
// // Connection URL
// const url = 'mongodb://localhost:27017'; 
// // Database Name
// const dbName = 'BookStore';
 
// // Use connect method to connect to the server
// MongoClient.connect(url, {useUnifiedTopology: true},function(err, client) {
 
//   console.log("Connected successfully to server");
 
//   const db = client.db(dbName);
 
//   db
//   .collection('User')
//   .insertOne({
//       name:'maryam', family:'soleymani', age: 29
//   })
//   .then(res => { 
//       console.log(res);
//     })
//   .catch(err => {
//       console.log(err);
//     })
//   .finally(done => {
//       console.log(done);
//   })

//   //client.close();
// });



/**
 * Connection To MySql
 */
// const connection = mysql.createConnection({
//     host    : 'localhost',
//     user    : 'root',
//     password: '123456',
//     database:'sakila',
//     insecureAuth: true
// });

// connection.connect(); 

// app.get('/film-info/:id', function(req,res){
//        const { id } = req.params;
//        connection.query (`SELECT film_info FROM sakila.actor_info where actor_id = ?`, [id] , function(error,results){
//            if (error) throw error;
//            res.send(results);
//        });
// });







// app.get('/users/:letter', function(req,res){
//      const {letter}=req.params;
//     connection.query(`SELECT * FROM sakila.actor_info where first_name like "${letter}%"`, function (error, results) {
//         if (error) throw error;
//        res.send(results);
//       });
    
// });






module.exports = app;
