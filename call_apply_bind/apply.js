const person = {
    name: 'X'
}

function greet(greeting, desc){
    console.log(greeting, this.name, desc)
}

Function.prototype.Myapply = function(context, arg){
    if(typeof this != "function") console.log('Not a function');
    if(!Array.isArray(arg)) console.log('Second arg should be Array')
    
    context = context !== null || context!== undefined ? context: globalThis;

    const uniqueKey = Symbol();
    context[uniqueKey] = this;
    const result = context[uniqueKey](...arg);
    delete context[uniqueKey];
    return result;
}

greet.Myapply(person, ['Hello', 'Nice to meet you'])