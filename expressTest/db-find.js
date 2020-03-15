// //ES6

const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017';

(async function (){
    try{
        const client = await MongoClient.connect(uri, { useNewUrlParser: true })
        
        const db = client.db('Zsls');
        db.collection('Human').find({_id: 811045678451}).toArray().then((docs) => {
            console.log((JSON.stringify(docs, undefined,2)));
        });
    } catch(e){
        console.log(e,"오류입니다.");
    }
})()