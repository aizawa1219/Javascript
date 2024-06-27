//ローカル変数。関数の内側で変数宣言。
function func() {
    var str = "ABC";
    console.log(str);
}
func();
console.log(str);