const {MongoClient, ObjectID} = require('mongodb');

const uri = 'mongodb://localhost:27017';

const connectDb = async () => {
    try{
        const client = await MongoClient.connect(uri,{ useNewUrlParser: true})
        const testData = {
            name: 'ConnectByEs6',
            age: 28,
            nationality: 'Korean'
        };
        const db = client.db('Zsls');
        db.collection('Human').insertOne(testData, () => {
            console.log('몽고 DB 입력 성공 =>', testData)
            }
        );
    }catch(e){
        console.log(e,'에러가 발생하였습니다.');
    }
    client.close();
}
connectDb();