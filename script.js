

//Practice Question
let marks = [12,21,23,34,45,56,43,35];

let sum = 0;

for(let val of marks){
   sum += val;
}


let avg = sum/marks.length;
console.log(`The avg of students maks ${avg}`);