var favorites = {
    food : "カレーライス",
    color : "青",
    number : 7
};
for ( var key in favorites ) {
    console.log(key + ' : ' + favorites[key]);
}