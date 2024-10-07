let str = 'yash';
let obj = { name: "Jatin"};

// for(let i of str){
//     console.log(str);
// }
for(let i of str){
    let iterator = str[Symbol.iterator]();
    console.log(iterator);
    console.log(iterator.next());
}
console.log(1+2) //output
console.log(1+"2") //output
console.log(typeof(1+"2"))
console.log(10 + "2")
console.log(typeof("10" + "2"))
console.log("10" + "A")
console.log(typeof("10" + "A"))