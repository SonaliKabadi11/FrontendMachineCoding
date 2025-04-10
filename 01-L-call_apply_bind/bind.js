//The bind() method in JavaScript creates a new function with a specified this value and optional arguments.
// bind() does not immediately execute the function.
// It creates a new function with this permanently set to thisArg.
// The bound function can be called later with additional arguments.

//Using bind() to Fix this

const person = {
    name: 's',
    
}

const hello = { 
    name: 'd',
    greet: function(Greeting){
        console.log(Greeting, this.name);
    }
}

Function.prototype.myBind = function(context, ...bondargs){
    if(typeof this !== "function") console.log('Not a function');
    context = context !== null || context !== undefined ?  Object(context): globalThis;

    const fn = this;
    return function(...arg){
        return fn.apply(context,[ ...bondargs, ...arg])
    }
}
const res = hello.greet.bind(person, "Hello");
res();


// Pre-Filling Arguments with bind()

function multiply(a, b) {
 return a * b;
}
const boundMultiply = multiply.myBind(null, 2);
console.log(boundMultiply(3));
console.log(boundMultiply(4));
