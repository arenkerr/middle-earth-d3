const { MongoClient } = require('mongodb');
const assert = require('assert');

const dbURL = 'mongodb://localhost:27017/arda';
const dbName = 'arda';
const collectionName = 'people';

let people = [
  {
    'name': 'Frodo Baggins',
    'tree_id': '@I9b4c335ad7@',
    'bio': 'Frodo was a Hobbit of the Shire, tasked with destroying the One Ring. Frodo is the nephew of Bilbo Baggins.'
  },
  {
    'name': 'Bilbo Baggins',
    'tree_id': '@I7f48029ecd@'
  },
  {
    'name': 'Samwise Gamgee',
    'tree_id': '@I240166bb73@',
    'bio': 'Samwise was the gardener of Frodo, his friend, and a member of the fellowship.'
  }
];


// Connect to the server
MongoClient.connect(dbURL, function(err, client) {
  assert.equal(null, err);
  console.log('Connected successfully to server');

  const db = client.db(dbName);
  const collection = db.collection(collectionName);

  collection.insertMany(people, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Documents inserted!');
    }

    client.close();
  });
});