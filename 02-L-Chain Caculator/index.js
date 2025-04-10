// Question
// Asked in Publicis sepient, Meesho
// Level -> Easy
// How would you implement a calculator class with methods for addition,
// subtraction, and multiplication, supporting method chaining?
// calculator.add(3).multiply(4).subtract(5).getValue()
// class Calculator {
// // write code here
// }
// const calculator = new Calculator(2);
// console.log(calculator.add(3).multiply(4).subtract(5).getValue()); //15

class calculator{
    
    constructor(initialVal = 0){
        this.value = initialVal;
    }
     add( b){
         this.value=this.value + b;
         return this;
    }
    
     sub( b){
         this.value=this.value-b;
         return this;
    }
    
     mul(b){
         this.value=this.value*b;
         return this;
    }
    
     div(b)
    {
         this.value=this.value / b;
         return this;
    }

    getValue(){
        return this.value
    }
}

let cal = new calculator(2);
console.log(cal.add(3).mul(3).sub(3).div(3))


