var global = 0;
function func() {
    global++;
}
for ( var i=0; i < 10; i++) {
    func();
}
console.log(global);