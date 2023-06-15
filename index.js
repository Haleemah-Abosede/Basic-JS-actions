//checking connection
console.log("Hello")

//attaching event listener
document.getElementById("Hello").onclick =sayHello;

function sayHello(){
    //for name
let yourname= document.getElementById("yourname").value;
console.log("Your name is " + yourname);
document.getElementById("msg").textContent= "Hello " + yourname + "!";

//for age
let yourage= parseInt(document.getElementById("yourage").value);
console.log("age is " + yourage)
let age10= yourage + 10
console.log("age in ten years is " + age10)
document.getElementById("age").textContent="You will be " + age10 + " in ten years";

}