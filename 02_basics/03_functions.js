function sayMyName(){   //function definition 
//     console.log('b');
//     console.log('h');
//     console.log('a');
//     console.log('v');
//     console.log('y');
//     console.log('a');
// }

//sayMyName()

//function addTwoNumbers(number1,number2){ //number1 is a parameter 
//    console.log(number1+number2);
}
// addTwoNumbers(3,4)  //3,4 are arguments agar nahi denge toh NAN ayega 
// addTwoNumbers(3,"4")  //by default system shamjhega ki dono string hai 

function addTwoNumbers(number1,number2){
// way 1 -let result =number1+number2
// return result     //return ke baad kuch bhi print nahi hoga 
return number1+number2    //way2 
}
const result =addTwoNumbers(3,4)
//console.log("result:",result);



function loginUserMessage(username ="sam"){
    if(username === undefined){
       // console.log("please enter a user name ")
        return 
    }
    //return "${username} just logged in"
}
//console.log(loginUserMessage("bhavya"))

// function calculateCartPrice(...num1){ //rest operator 
//    return num1;
// }
// console.log(calculateCartPrice(200,400,500))
function calculateCartPrice(val1,val2,...num1){ //rest operator 
   return num1;
 }
 //console.log(calculateCartPrice(200,400,500,2000)) //200 val1 mein aur 400 val2 mein jaa chukahai isliye sirf 500 aur 2000 array mein. hai 

 const user = {
    username: "bhavya",
    price: 200
};

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

//handleObject(user);
handleObject(
    {
        username:"sam",
        price:299
    }
)

const myNewarray =[200,300,300]

function returnSecondValue(getArray)
{
    return getArray[1]
}
console.log(returnSecondValue(myNewarray))