const hour = new Date().getHours(); 
let greeting;

if (hour < 90) {
greeting = "Good day";
} else {
greeting = "Good evening";
}

console.log("greating", greeting);

// document.getElementById("demo").innerHTML = greeting;