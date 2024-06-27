function calc(){
    var num = 0;
    for(var i = 1; i <= 10; i++){
        num += i;
    }
    return num;
}

var result = calc();
console.log(result);
console.log(calc()); //1行で記述することも可能