//Built-in browser functions

let myText='I an a string';
let newString=myText.replace('string','sausage');
console.log(newString);
//the replace() string function takes a source string,
// and a target string and replaces the source string,
// with the target String, and returns the newly fored string

let myNumber=Math.random();
console.log(myNumber);
// the random() function generates a random number betwwen
//0 and up to nut not includeing 1. and returns that number

/**
 *  The js has many built-in functions to allow you to do useful things.
 *  In fact, some of the code you are calling when you invoke a built in 
 *  browser function couldn't be written in js
 */

//  const myGreeting=function(){
//      alert('hello');
//  }


//  let anotherGreeting=myGreeting;

//  myGreeting();
// anotherGreeting();

const body=document.querySelector('body');

const myButton=document.createElement("button");
myButton.textContent='click';
body.appendChild(myButton);

myButton.onclick=function(){
    alert('hello');
}

//It is better than up

let myArray=['I','love','chocolate','frogs'];
let madeAString=myArray.join(' ');

console.log(madeAString);
madeAString = myArray.join();
console.log(madeAString);


// function scpe
// declare same name in different js-file for example, problem would occur

function output(para){
    console.log(para);
}

function a() {
    let y = 2;
    output(y);
  }
  
  function b() {
    let z = 3;
    output(z);
  }

  a();
  b();