//var c=300 //ye hai global scope 

//  if(true){           //if ke andar jo bhi likha hai woh hai block scope 
//     let a =10
//     const b =20
//    // var c = 30
//  }

    
//console.log(a);     //jab execute kiya toh a is not defined aaya phir. usko comment kardiya same for b too but c print hoagya 
//console.log(b);   
//console.log(c);    //isliye var not used 
 let a =300
 if(true){
    let a=10
    const b =20 
   // console.log("inner:",a)
 }
 //console.log(a)

 function one(){
     const username="bhavya "

     function two(){
        const website ="youtube"
        console.log(username)
     }
//console.log(website)
//two()
 }
 //one()     //one ko execute kiya


if(true){
    const username ="bhavya"
    if(username==="bhavya"){
        const website ="youtube"
       // console.log(username + website);
    }
    //console.log(website)        //wont be executed as it is out of scope 
}
//console.log(username).     //not in scope 


//*************************************/
console.log(addone(5))
function addone(num){     //declaration se pehle we can write addone and it iwll execute 
    return num+1
}



const addtwo =function(num){   //in this we cant 
    return num+2                //hosting 
}
addtwo(5)
console.log(addtwo)