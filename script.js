//Task 2


let marks = 75;

let grade;

if (marks >90){
    grade = "A"
}else if (marks >=80 && marks <= 90){
    grade = "B"
}else if (marks >=70 && marks <= 80){
    grade = "C"
}else if (marks >=60 && marks <= 70){
    grade = "D"
}else if (marks >=50 && marks <= 60){
    grade = "D+"
}
else{
    console.log(num, "Student is fail")

}

console.log("Acording to your marks, your grade was:", grade)