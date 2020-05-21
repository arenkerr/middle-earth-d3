const { MongoClient } = require('mongodb');
const assert = require('assert');

const dbURL = 'mongodb://localhost:27017/arda';
const dbName = 'arda';
const collectionName = 'people';

let people = [{"name":"Melian","tree_id":"@Ib7bd611659@","bio":null,"race":"Elf"},{"name":"Lúthien","tree_id":"@I376728ef14@","bio":null,"race":"Elf"},{"name":"Dior","tree_id":"@I975bbf4210@","bio":null,"race":"Elf"},{"name":"Arminas","tree_id":"@I73a94a2f8f@","bio":null,"race":"Elf"},{"name":"Celeborn","tree_id":"@I00df300513@","bio":null,"race":"Elf"},{"name":"Elemmakil","tree_id":"@I621b2328fa@","bio":null,"race":"Elf"},{"name":"Glorfindel","tree_id":"@Ie856c24f63@","bio":null,"race":"Elf"},{"name":"Haldir","tree_id":"@I039ba8adaf@","bio":null,"race":"Elf"},{"name":"Legolas","tree_id":"@I9dcadb9a70@","bio":null,"race":"Elf"},{"name":"Anairë","tree_id":"@I99de4ea4c3@","bio":null,"race":"Elf"},{"name":"Fingon","tree_id":"@I4a2e147329@","bio":null,"race":"Elf"},{"name":"Aredhel","tree_id":"@Id0b9bf1a8c@","bio":null,"race":"Elf"},{"name":"Maeglin","tree_id":"@Ib7ad6f1614@","bio":null,"race":"Elf"},{"name":"Argon","tree_id":"@I6e06f5d370@","bio":null,"race":"Elf"},{"name":"Turgon","tree_id":"@I8105a7b05a@","bio":null,"race":"Elf"},{"name":"Mablung","tree_id":"@I54530a5c4c@","bio":null,"race":"Elf"},{"name":"Tuor","tree_id":"@If8f0f83f42@","bio":null,"race":"Elf"},{"name":"Galion","tree_id":"@I139e3f4d4c@","bio":null,"race":"Elf"},{"name":"Daeron","tree_id":"@I2c6b46d39c@","bio":null,"race":"Elf"},{"name":"Olwë","tree_id":"@I806a0e65c2@","bio":null,"race":"Elf"},{"name":"Eärwen","tree_id":"@I196528021a@","bio":null,"race":"Elf"},{"name":"Finrod","tree_id":"@I613cb424f3@","bio":null,"race":"Elf"},{"name":"Angrod","tree_id":"@I8c953234db@","bio":null,"race":"Elf"},{"name":"Aegnor","tree_id":"@Ib7b3945e0f@","bio":null,"race":"Elf"},{"name":"Galadriel","tree_id":"@Ib766d103d0@","bio":null,"race":"Elf"},{"name":"Celebrían","tree_id":"@Ifd9f5fbc6d@","bio":null,"race":"Elf"},{"name":"Arwen","tree_id":"@I5cae7ea6aa@","bio":null,"race":"Elf"},{"name":"Elladan","tree_id":"@I6f0c475092@","bio":null,"race":"Elf"},{"name":"Elrohir","tree_id":"@I8796ffa281@","bio":null,"race":"Elf"},{"name":"Hendor","tree_id":"@I7c06c1a525@","bio":null,"race":"Elf"},{"name":"Ecthelion","tree_id":"@Iefbefa8bba@","bio":null,"race":"Elf"},{"name":"Oropher","tree_id":"@I8b2171a736@","bio":null,"race":"Elf"},{"name":"Thranduil","tree_id":"@Ie631ca19ac@","bio":null,"race":"Elf"},{"name":"Legolas","tree_id":"@Iab0bd411ef@","bio":null,"race":"Elf"},{"name":"Ingwë","tree_id":"@I5fa8afc7c1@","bio":null,"race":"Elf"},{"name":"Beren","tree_id":"@I7899c30814@","bio":null,"race":"Elf"},{"name":"Guilin","tree_id":"@If1b3e667f6@","bio":null,"race":"Elf"},{"name":"Gwindor","tree_id":"@I5a21838ced@","bio":null,"race":"Elf"},{"name":"Círdan","tree_id":"@I68cc8521da@","bio":null,"race":"Elf"},{"name":"Eöl","tree_id":"@I1c7df57d7e@","bio":null,"race":"Elf"},{"name":"Andreth","tree_id":"@I536aa7573e@","bio":null,"race":"Elf"},{"name":"Penlod","tree_id":"@I397c9815a5@","bio":null,"race":"Elf"},{"name":"Aragorn","tree_id":"@I31912c2a8b@","bio":null,"race":"Elf"},{"name":"Beleg","tree_id":"@I7437aca45f@","bio":null,"race":"Elf"},{"name":"Eldalôtë","tree_id":"@I1eb931cd4d@","bio":null,"race":"Elf"},{"name":"Orodreth","tree_id":"@I65b60a4f61@","bio":null,"race":"Elf"},{"name":"Finduilas","tree_id":"@I28c42ad560@","bio":null,"race":"Elf"},{"name":"Gil-galad","tree_id":"@If8bb470ec4@","bio":null,"race":"Elf"},{"name":"Galdor of the Tree","tree_id":"@Iaccf019311@","bio":null,"race":"Elf"},{"name":"Elmo","tree_id":"@I5256223e6b@","bio":null,"race":"Elf"},{"name":"Galadhon","tree_id":"@I73b73ad84b@","bio":null,"race":"Elf"},{"name":"Galathil","tree_id":"@I3646ac6f82@","bio":null,"race":"Elf"},{"name":"Nimloth of Doriath","tree_id":"@I15061bd116@","bio":null,"race":"Elf"},{"name":"Elurín","tree_id":"@Ia3fa996024@","bio":null,"race":"Elf"},{"name":"Elwing","tree_id":"@I70bd5372a3@","bio":null,"race":"Elf"},{"name":"Elros","tree_id":"@I254d84f5d1@","bio":null,"race":"Elf"},{"name":"Elrond","tree_id":"@Id7dd0bc583@","bio":null,"race":"Elf"},{"name":"Eluréd","tree_id":"@I7d5a08e940@","bio":null,"race":"Elf"},{"name":"Míriel","tree_id":"@I4fc598650d@","bio":null,"race":"Elf"},{"name":"Fëanor","tree_id":"@I43c5c56946@","bio":null,"race":"Elf"},{"name":"Lenwë","tree_id":"@I6627a7c1d1@","bio":null,"race":"Elf"},{"name":"Denethor","tree_id":"@I7dba7f5c26@","bio":null,"race":"Elf"},{"name":"Finwë","tree_id":"@Ic8e0db7ecd@","bio":null,"race":"Elf"},{"name":"Aranwë","tree_id":"@I1b14cb8553@","bio":null,"race":"Elf"},{"name":"Voronwë","tree_id":"@I7e3440cba4@","bio":null,"race":"Elf"},{"name":"Egalmoth","tree_id":"@I48d753ace3@","bio":null,"race":"Elf"},{"name":"Amdír","tree_id":"@Ib6d0f84456@","bio":null,"race":"Elf"},{"name":"Amroth","tree_id":"@I7570ebfbd6@","bio":null,"race":"Elf"},{"name":"Thingol","tree_id":"@Id9fe881adc@","bio":null,"race":"Elf"},{"name":"Amarië","tree_id":"@I440aefc561@","bio":null,"race":"Elf"},{"name":"Elenwë","tree_id":"@I2aaa097382@","bio":null,"race":"Elf"},{"name":"Idril","tree_id":"@I4fe514e98e@","bio":null,"race":"Elf"},{"name":"Eärendil","tree_id":"@Ic774286e4b@","bio":null,"race":"Elf"},{"name":"Elulindo","tree_id":"@Ib5f08a3233@","bio":null,"race":"Elf"},{"name":"Pengolodh","tree_id":"@I9b458ac7fd@","bio":null,"race":"Elf"},{"name":"Ithilbor","tree_id":"@Ic423d7f393@","bio":null,"race":"Elf"},{"name":"Saeros","tree_id":"@I112b1a9ac3@","bio":null,"race":"Elf"},{"name":"Mahtan","tree_id":"@I43dbe81fc0@","bio":null,"race":"Elf"},{"name":"Nerdanel","tree_id":"@If9406e1782@","bio":null,"race":"Elf"},{"name":"Curufin","tree_id":"@I4ac6545568@","bio":null,"race":"Elf"},{"name":"Celebrimbor","tree_id":"@Ib2fe204600@","bio":null,"race":"Elf"},{"name":"Celegorm","tree_id":"@Ib5a17d452c@","bio":null,"race":"Elf"},{"name":"Amras","tree_id":"@Iafa1139c52@","bio":null,"race":"Elf"},{"name":"Maglor","tree_id":"@Id1e67594b2@","bio":null,"race":"Elf"},{"name":"Amrod","tree_id":"@Iefe8498fdf@","bio":null,"race":"Elf"},{"name":"Maedhros","tree_id":"@I156301c010@","bio":null,"race":"Elf"},{"name":"Caranthir","tree_id":"@I47f123cb57@","bio":null,"race":"Elf"},{"name":"Duilin of Gondolin","tree_id":"@Ia47fc230f2@","bio":null,"race":"Elf"},{"name":"Rúmil","tree_id":"@I94e16351f0@","bio":null,"race":"Elf"},{"name":"Indis","tree_id":"@I5548a82618@","bio":null,"race":"Elf"},{"name":"Írimë","tree_id":"@I027bc7123e@","bio":null,"race":"Elf"},{"name":"Finarfin","tree_id":"@I3567b59b3a@","bio":null,"race":"Elf"},{"name":"Fingolfin","tree_id":"@I8a6fe3a1bb@","bio":null,"race":"Elf"},{"name":"Findis","tree_id":"@Id31036147e@","bio":null,"race":"Elf"},{"name":"Nimrodel","tree_id":"@I2733405530@","bio":null,"race":"Elf"}]

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