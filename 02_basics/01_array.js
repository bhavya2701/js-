const myarr =[0,1,2,3,4]
const myarr2 =new Array(1,2,3,4)

// console.log(myarr[2])
// console.log(myarr[1])

//array methods 
// myarr.push(6)
// myarr.pop()
// myarr.unshift(9)
// myarr.shift()
// console.log(myarr.includes(9))
// console.log(myarr)
// console.log(myarr.indexOf(3))

const newarr =myarr.join()

// console.log(myarr);
// console.log(typeof newarr)
// console.log(newarr)


// slice ,splice
// console.log("a",myarr);
const myn1 =myarr.slice(1,3)
// console.log(myn1);
// console.log("b",myarr);
const myn2 =myarr.splice(1,3)
// console.log("c",myarr);
// console.log(myn2)

const heroes =["thor ","ironman","spiderman"]
const dc=["superman",'flash',"batman"]
heroes.push(dc)
console.log(heroes)
onsole.log(heroes[3][1])
