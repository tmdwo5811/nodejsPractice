var express = require('express');
var app = express();
app.get('/', (req, res) => { //app.get = '라우터' 라는 역할, 라우팅 = 길을 찾다.
    res.send('Hello home page');
});
app.get('/login',(req, res) => {
    res.send('Login please');
})
app.listen(3000, () => {
    console.log('Connected 3000 port!');
});