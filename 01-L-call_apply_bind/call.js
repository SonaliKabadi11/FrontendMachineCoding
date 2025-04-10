
// The call() method in JavaScript is used to invoke a function 
// with a specified this value and individual arguments.


//Using call() to Set this
const Person= {
    name: 'sonali',
}
Function.prototype.myCall = function(context, arg){
    if(typeof this != "function") {
        console.log('Not a function')
    }

    context = context !== null || context !== undefined? context : globalThis;
    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const result = context[uniqueKey](arg);
    delete   context[uniqueKey] ;
    return result
}
function greet(greeting){
    console.log(greeting, this.name )
}

greet.myCall(Person, 'Hello')

// * call() allows you to manually set the value of this inside a function.
// * It immediately invokes the function with the specified this context.
// * Additional arguments are passed individually (not as an array).

//Inherit Properties using call()

function Animal(name){
    this.name = name;
}

function Dog(name, bread){
    Animal.myCall(this, name); 
    this.bread = bread;
}

const D1 = new Dog('doggy', 'local');
console.log(D1.name);
console.log(D1.bread)



