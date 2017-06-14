console.log("hello world");
console.log("Hi");

var arr = [5,10,15,20];
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i]*5);
    }


var myobject ={
                language: "javascript",
                dojo: "washington DC",
                favorite_instructor: "minh, not wait dan AAAHHHHH"
}
Object.keys(myobject).forEach(function(key, value){
    console.log(key, value);
})


var hello;
var jello;
function greeting(){
  console.log("I will be hoisted");
}
hello = 'Whee!';
jello = 'jiggly';
console.log('hello world');

console.log('hello world');
var hello = 'Whee!';
var jello = 'jiggly';
function greeting(){
  console.log("I will be hoisted");
}

console.log(a);
var a = "weird";

console.log(typeof(b));
var b = "weird too";
console.log(typeof(b));


var myunknown = 'hello';
console.log(typeof(myunknown));


var arr = [3, 6];
arr[234] = "hi";

console.log( arr.length ); 
console.log( arr[34] ); 