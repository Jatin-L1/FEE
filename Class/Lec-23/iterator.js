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