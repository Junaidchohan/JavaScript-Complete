


//Practice Questions
const readline = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question("Enter your full name: ", (fullName) => {
    let processedName = fullName.replace(/\s+/g, "");
    let username = "@" + processedName + processedName.length;
    console.log("Your generated username is: " + username);
    readline.close();
});



