const MongoClient = require('mongodb').MongoClient;

console.log(ObjectID());

// ES6 이후 Object Destructuring
let humanZsl001 = {
    name: 'SantJ',
    _id: 821093943588,
    nationality: 'Korean',
    balance: 345678, 
    currency: 'KRW'
};
    let {name, _id} = humanZsl001;

    console.log(name, _id);

// Openhash Platform => Market participants 시장 참여자 => 사람 물건 등등 zsls 지슬
// 지슬 => 사람, 사물, 개념
MongoClient.connect('mongodb://localhost:27017/Zsls',(error, client) => {
    if(error){
       return console.log('Unable to connect to database...');
    }
    console.log('Connected to 몽고 DB');
    const db = client.db('Zsls');
    db.collection('Human').insertOne({
        name: 'SantJ',
        _id: 821093943588,
        nationality: 'Korean',
        balance: 345678, //Bank Standard Currency
        currency: 'KRW'
    }, (error, result) => {
        if(error){
           return console.log('Someting Wrong ~');
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    client.close();
});