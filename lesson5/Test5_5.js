for (var i = 1; i <= 10; i++) {
    if (i > 5) {
        break;
    } else if (i % 3 == 0) {
        continue;
    }
    console.log(i);
}