const score =400
// console.log(score);
const balance  =new Number(100)
// console.log(balance) is mein hum specify kar rahe haiki value is a number 

// console.log(balance.toString().length);
//value 100 hi hai par agar type of check karenge toh string aayega 
// console.log(balance.toFixed(2))

const othernumber  =123.44
// console.log(othernumber.toPrecision(3))
//priority deciamal ke pehle hi milegi 

const hundreds =1000000
// console.log(hundreds.toLocaleString("en-IN"));

//********** maths ********/
// console.log(Math);
// console.log(Math.abs(-4))
// console.log(Math.round(4.3))
// console.log(Math.ceil(4.3))
// console.log(Math.floor(4.3))
// console.log(Math.min(4,3,6,8))
// console.log(Math.max(4,3,6,8))
// console.log(Math.random())
//always value btw 0 to 1
// console.log(Math.random()*10+1)
// console.log(Math.floor(Math.random()*10)+1) //gurranted value willl be greater than 1 and better way to write 

const min=10
const max=20

console.log(Math.floor(Math.random() *(max-min+1))+min)//wo that value doesnt come 0 


 