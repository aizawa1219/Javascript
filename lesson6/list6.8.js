//グローバルスコープ。変数strの宣言を省略しているから。
function func() {
    str = "ABC";
    console.log(str);
}
func();
console.log(str);