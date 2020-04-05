var express = require('express');
var app = express();
app.use(express.static('public'));
//도커 설치 해야함.
  
app.get('/', (req, res) => { //app.get = '라우터' 라는 역할, 라우팅 = 길을 찾다.
    res.send('');
});
app.get('/hello',(req,res) => {
    res.send('Hello world~!');
});

app.get('/login',(req, res) => {
    res.send('Login adsfasdfasdfplease');
});
app.get('/index',(req, res) => {
    res.send('HTML');
});


app.listen(3000, () => {
    console.log('Connected 3000 port!');
});