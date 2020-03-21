var variable = 'functionScope';

function functionScope () {
    var variable2 = 'functionScope2';
    console.log(variable, '함수 실행'); // 출력
    console.log(variable2, '함수 실행 2')
}
console.log(variable); //출력
//console.log(variable2); //에러
functionScope();

let obj = {
    testString : 1,
    testFunc : () => {
        console.log(testString)}
}

console.log(obj.testString, '오브젝트 Key값 호출');