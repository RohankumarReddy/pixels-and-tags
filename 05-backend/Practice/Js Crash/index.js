/* ===== forEach Example ===== */
var arr1 = [2, 3, 54, 6];

arr1.forEach(function (val) {
    val + 1;
});
console.log(arr1);



/* ===== map Example ===== */
var arr2 = [22, 33, 44, 55];

var new_arr = arr2.map(function (val) {
    var a = 12;
    return val + a;
});
console.log(new_arr);



/* ===== filter Example ===== */
var arr3 = [123, 13123, 24];

var news = arr3.filter(function (val) {
    return val > 200;
});
console.log(news);



/* ===== indexOf Example ===== */
var i = arr3.indexOf(123);
console.log(i);



/* ===== Object.keys Example ===== */
var b = {
    name: "Rohan",
    age: 23
};

var q = Object.keys(b);
console.log(q);
