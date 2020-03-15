
const mongoose = require('mongoose');
const uri = 'mongodb://localhost:27017/Transaction';

(async function () {
    try{
        await mongoose.connect(uri);

        //OOP 객체 지향 프로그래밍 메커니즘을 몽고DB에 적용
        const Txn = mongoose.model('Transaction', { //Transaction <= DB 이름 
            content: {
                type: String
            },
            settled:{
                type: Boolean
            },
            tradeAt:{
                type: Date
            }
        });
       // 인스턴스를 만드는 과정
        let newTxn = Txn({
            content: '몽고디비는 한국인이고, 자판기에서 커피를 구매하였습니다.',
            tradeAt: Date.now(),
        });
        newTxn.save().then((doc) => {
            console.log(`Saved ${doc}`);
        });

    }catch(e){
        console.log(e,'에러가 발생하였습니다.');
    }
})()