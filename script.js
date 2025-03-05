
// For In Loop its use for Objects and Arrays and print key and values but dont for Strings,




// Student ={
//     name : "Junaid",
//     age   :25,
//     cgpa : 3.5,
// }

// for (let key in Student){
//     console.log("Key =", key);
// }

Student ={
    name : "Junaid",
    age   :25,
    cgpa : 3.5,
}

for (let key in Student){
    console.log("Key =", key, "Value =", Student[key]);
}

