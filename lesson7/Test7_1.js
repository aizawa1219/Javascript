var item1 = {
    price : 1000
};
var item2 = {
    price : 2000,
    calcTax : function() {
        console.log(this.price * 0.5);
    }
};
item2.calcTax.call(item1);