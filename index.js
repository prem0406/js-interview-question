/*
console.log('start')

function cb(){
    console.log('callback');
}
// cb();
setTimeout(cb,0);

console.log('End');
*/

//---------------------------------------
//HOISTING FUNCTION VAR VS. FUNCTION VS. LET CONST
// y()
// var x=()=>{
//     console.log('Hi');
// };

// function y(){
//     console.log('y');
// };

//-------------------------------
//REDUCE
// const arr = [1,2,3,4,5]

// const x = arr.reduce((acc, curr)=>{
//     acc= acc+curr;
//     return acc;
// },0);

// console.log(x)


/*
BUBLING AND CAPTURING
-------------------------------------------------------------------------
BUBBLING - INSIDE OUT

INNER--> OUTER--->DOCUMENT

CAPTURING- OUTSIDE IN-------------

element.addEventListener(()=>{},{capture: true});

last option is options {} obj

you can pass {once: true}, it will trigger event only once

DOCUMENT-->OUTER-->INNER
--------------------------------------------
*/

/*--------------------------------------------------------------------------
CALL/APPLY/BIND
--------------------------------------------------------------------
Use .bind() when you want that function to later be called with a certain context, useful in events. 
Use .call() or .apply() when you want to invoke the function immediately, and modify the context.

*/

let show = function(hometown, state){
	console.log(this.firstName, this.lastName, hometown, state);
}

const obj = {
    firstName: "Prem",
    lastName: "Kumar"
}

// show.call(obj, "Jalandhar", "Punjab");
// show.apply(obj, ["Jalandhar", "Punjab"]);
// const returnedFun = show.bind(obj, "Jalandhar", "Punjab");
// returnedFun()

//***************************************************************************** */
/*
PolyFill for bind method

It is basically you have write your own bind method in

Function.prototype
*/

let name = {
    firstName: "Prem",
    lastName: "Kumar"
}

let printName = function(hometown, state, country){
	console.log(this.firstName, this.lastName, hometown, state, country);
}

// let printMyName = printName.bind(name,"Jalandhar", "Punjab");
// printMyName("India");

//Polyfill

Function.prototype.myBind = function(...params){
    let ob = this;

    const [fistParam, ...restParam] = params;
    return function(...params2){
        ob.apply(fistParam, [...restParam, ...params2])
    }
}

let printMyName2 = printName.myBind(name,"Jalandhar", "Punjab");
printMyName2("India");

//---------------------------------------------------------------------
/*
FUNCTION CURRYING

--you can also achieve this by Bind Method
*/

let multiply = function(x){
    return function(y){
        console.log(x * y);
    }
}

let multiplyByTwo = multiply(2);
multiplyByTwo(10);

let multiplyByThree = multiply(3);
multiplyByThree(10)
