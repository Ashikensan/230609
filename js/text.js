// alert(12)

var object1 = {
    "a":"あ",
    "b":"い",
    "c":"う",
    "d":"え"
}
// console.dir(object1)
console.log(object1.a)
const json_text = JSON.stringify(object1);
console.log("o"+json_text)
const json = JSON.parse(json_text);
console.log(json);