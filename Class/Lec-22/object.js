// let arr =  [1,2,3,4,5];
// console.log(arr.splice(1,2));

// There are two ways two declare  an object : constructor/ literals 


//  A) constructor:
// const obj = new Object();
// obj.name = 'YASH'
// console.log(typeof obj);
// console.log(obj);


//  b) Literals
//  const users = {
//     name:  'YASH',
//     'roll number': 2310992026,
//     subject: 'FEE'
//  }

//  1. Accessing object values
//  console.log(users)
//  console.log(users.name)
//  console.log(users["roll number"])
//  console.log(users.subject)


//  Changing Object values
// users.name = 'Jatin Sharma';
//  console.log(users)


// 3. Object inside an object
// let users = {
//     user1 :{
//         name: 'Larriot',
//         age: 24,
//         user3 : {
//             Surname: 'Sharma',
//             weight: 'Hardik Jitna'
//         }
//     },
//     user2 :{
//         name: 'yash',
//         age: 24,
//         user4 : {
//             religion: 'Hindu',
//             Work: 'Berozgaar'

//         }
//     }

// }
// console.log(users.user1.age);
// console.log(users.user1.user3.weight);
// console.log(users.user2.user4.Work);

// 4: Object inside an array:
// let arr = [
//     {
//         name: 'Jatin'
//     },
//     {
//         name: 'Yash',
//         'roll number': 123
//     },
//     {
//         name: 'Akshit',
//         'roll number' : 123456
//     }
// ]
// console.log(arr[2].name);

//5 merge sort
obj1 = {name1: 'Jatin' , age:18}
obj2 = {name2: 'Akshit' , age:10}
obj3 = {...obj1,...obj2}
console.log(obj3);
obj4 = Object.assign(obj1,obj2);
console.log(obj4)



