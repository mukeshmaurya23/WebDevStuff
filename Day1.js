// let p1=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           reject("hello")
//     },4000)
// })
// let p2=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           resolve("mukesh")
//     },5000)
// })
// let p3=new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//           reject("how are you")
//     },3000)
// })

// Promise.race([p1,p2,p3]).then((response)=>console.log(response))

//hof--<a function that take another function as an argumnet and return function from it

// function abc(...data){
//   console.log(this.name,data[0],data[1])
// }

// let p1={name:"mukesh"}

// abc.call(p1,["he","ha"])

//res()
// let result=abc(cb)

// console.log(result)

// function callbackFunction(){
//  setTimeout(()=>{
//     console.log('I am  a callback function');
//  },0)
// }

// // higher order function
// function higherOrderFunction(func){

//   func()
//    console.log('I am higher order function')
// }

// higherOrderFunction(callbackFunction);

//function currying
function curryAdd(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Usage of the curried function
const curriedAdd = curryAdd(2);
const result = curriedAdd(3);
let res = result(4);
console.log(res);
