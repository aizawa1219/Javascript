var str = "グローバル";
function func1() {
    var str = "func1";
    console.log(str);
}
function func2() {
    var str = "func2";
    console.log(str);
}
func1();
func2();
console.log(str);

//実行結果
//func1
//func2
//グローバル