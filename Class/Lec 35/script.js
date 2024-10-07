// function first(){
//     console.log("This is a function")
// }
// function second(){
//     console.log("This is second function")
// }
// // function calling
// first();
// second();

// function first(){
//     console.log("This is first function")
// }
// function second(call){
//     console.log("This is second function")
//     call();
// }

// // function calling

// second(first);

// synchronus 
// console.log('stated')
// function myfun(){
//     console.log("myfun working");
// }
// myfun();
// console.log("Ends")

// //  javascript is asynchronus but it works in synchronus way.

// 1. callback function , 2. delay
// console.log("Image searching")
// for(let i =0;i<1000;i++){
//     console.log("loop is working")
// }
// let a  = setTimeout(()=>{
//     console.log("Image rendered");
// }, 2000);
// clearTimeout(a);
// console.log("Work done")

// setInterval:
// console.log("Image searching")
// for(let i =0;i<1000;i++){
//     console.log("loop is working")
// }
// let a  = setInterval(()=>{
//     console.log("Image rendered");
// }, 2000);
// clearInterval(a);
// console.log("Work done")


// let count =0 ;

// let a  = setInterval(()=>{
//     count++;
//     console.log(`Message ${count}: Ghar ke nice ajja`);
//     if(count>=3){
//         clearInterval(a);
//         console.log("Exectuion stop")
//     }
// });

//callback hell

//suppose we want to make a maggie

//Step 1: maggie lene gaya : 2 sec
//Step 2: maggie lekar a gaya
// Step 3: maggie banana start kiya : 2sec
// step 4: maggie baan gayi
// step 5: maggie khana start kiya:
// step 6: maggie khana samapat
// console.log("maggie lene gaya")

// setTimeout(()=>{
//     console.log("maggie lekar a gaya")
//     console.log("maggie banana start kiya")

//     setTimeout(()=>{
//          console.log("maggie baan gayi")
//          console.log("maggie khana start kiya")
//          setTimeout(()=>{
//             console.log("Maggie khana samapat")
//          });
//     },2000);
// },2000);


function maggiLaao(cb){
    console.log("Maggi lene gaya")
    setTimeout((maggibaana)=>{
        
    })
}
function maggibaana(cb){
    console.log("Maggi banana start kiya")
    setTimeout((maggibani)=>{

    })
}
function maggibani(cb){
    console.log("Maggi baan gayi")
    setTimeout((maggikhana)=>{

    })
}
function maggikhana(cb){
    console.log("Maggi khana start kiya")
    setTimeout((maggisamapat)=>{

    })
}
function maggisamapat(cb){
    console.log("Maggi samapat ho gayi")
    setTimeout(()=>{

    })
}



