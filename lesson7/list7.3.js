var obj1 = {
    name : "よしお",
    greet : function() {
        console.log(this.name + "です、はじめまして");
    }
};
var obj2 = {
    name : "ユリ子"
};
obj1.greet.call(obj2);
//実行結果
//ユリ子です、はじめまして