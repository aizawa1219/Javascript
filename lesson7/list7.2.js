var obj = {
    name : "よしお",
    greet : function() {
        console.log(this.name + "です、はじめまして");
    }
};
obj.greet();