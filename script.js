//Practice Question
//print the  squre value for each number using forEach method
let num = [1,2,3,4,5,6];


// num.map((num)=>{
//     console.log(num*num);
// })

 let newArray = num.map((num)=>{
    return num*num;
})

console.log(newArray);