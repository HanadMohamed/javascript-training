const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
greeting = "Bad day";
} else {
greeting = "Bad evening";
}

console.log("greating", greeting);

// document.getElementById("demo").innerHTML = greeting;