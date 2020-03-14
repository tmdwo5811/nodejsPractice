//ES6

const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017';

(async function (){
    try{
        const client = await MongoClient.connect(uri, { useNewUrlParser: true })
        
        const db = client.db('Zsls')
    } catch(e){
        console.log(e);
    }
})()