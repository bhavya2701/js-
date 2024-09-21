let mydate = new Date()
// console.log(mydate.toString());
// console.log(mydate.toJSON());
// console.log(mydate.toISOString());
// console.log(mydate.toLocaleDateString());
// console.log(typeof mydate)

// let mycreateddate =new Date(2023 ,0,23)
// let mycreateddate =new Date(2023,0,23,5,3)
// // console.log(mycreateddate.toDateString())
// console.log(mycreateddate.toLocaleString())

let mycreateddate =new Date("2023-01-23")
// console.log(mycreateddate.toLocaleString())

// let mytimestamp =Date.now()
// console.log(mytimestamp)
// console.log(mycreateddate.getTime())
// console.log(Math.floor(Date.now()/1000))

// let newdate =new Date()
// console.log(newdate)
// console.log(newdate.getMonth())


newDate.toLocaleString("default",{
   weekday:"long"
})