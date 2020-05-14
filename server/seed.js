// const { MongoClient } = require('mongodb');
// const assert = require('assert');
// const { dbURL, dbName, collectionName } = require('./config');

// let people = [
//   {
//     'name': 'Frodo Baggins',
//     'tree_id': '@I9b4c335ad7@'
//   },
//   {
//     'name': 'Bilbo Baggins',
//     'tree_id': '@I7f48029ecd@'
//   }
// ];

// // Connect to the server
// MongoClient.connect(dbURL, function(err, client) {
//   assert.equal(null, err);
//   console.log('Connected successfully to server');

//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);

//   collection.insertMany(people, (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('Documents inserted!');
//     }

//     client.close();
//   });
// });