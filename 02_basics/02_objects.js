//singleton

//object literals

const mysym =Symbol("key1") //using symbol as key first decalre 

const JsUser = {
   name : "Bhavya",
   "fullname":"bhavya jain ",
   [mysym ]:"mykey1"// agar square brackets nahi daalenge toh iska type string hi rahega and it wont be used as a symbol 
  //email:"bhavya@gmail.com"
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["fullname"]) //ye hum noraml consolelog se access nahi akr sakte isliye this is better way 
// console.log(JsUser[mysym]) 
JsUser.email="bhavya@chatgpt.com"
// Object.freeze(JsUser) //values cant be changed they r freezed now 
JsUser.email ="bhvya@microsoft.com"
// console.log(JsUser);

JsUser.greeting =function(){
  // console.log("hello js user")
}
JsUser.greetingtwo  =function(){
   // console.log('hello js user ,$(this.name)')
 }
//  console.log(JsUser.greeting())
//  console.log(JsUser.greetingtwo())

// const tinderuser = new Object()  //singleton object 
const tinderuser={} //non singleton object but both will give empty tag as output 
tinderuser.id ="123abc"
tinderuser.name="bhavya"
tinderuser.isloggedin =false
// console.log(tinderuser)

const regularuser = {
    email: "bhavya@gmail.com",
    fullname: {
        userfullname: {
            firstname: "bhavya",
            lastname: "jain"
        }
    }
}
//console.log(regularuser.fullname);


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"a",4:"b"}

//const obj3={obj1.obj2}
// const obj3 =Object.assign({},obj1,obj2). //{}acts as taget and others as source 
// console.log(obj3)

const obj3 ={...obj1,...obj2}
//console.log(obj3)

//console.log(tinderuser)
//console.log(Object.keys(tinderuser));
// console.log(Object.values(tinderuser));
//     console.log(Object.keys(tinderuser));
//     console.log(Object.entries(tinderuser));
//     console.log(tinderuser.hasOwnProperty("isloggedin"))


const course ={
    coursename :"jshindi",
    price:999,
    teacher:"bhavya"
}
const {teacher} =course
//console.log(teacher)
const {teacher:tuitor} =course //destructuring 
//console.log(tuitor)


// {
//     "name":"bhavya"
//     "course":"jshindi"
// }