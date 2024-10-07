function printName(num){
    for(let i =1;i<=num;i++){
        console.log(num);
    }

}
printName(20);

let myName = function (){
    console.log("Jatin")
};
printName(myName() , 20);