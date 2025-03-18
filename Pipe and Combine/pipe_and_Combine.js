const pipe = (...fns) => (input) => {
    // code here
    return fns.reduce((res, fn) => fn(res), input)
    
    }
   
   
   
   
    const compose = (...fns) => (input) =>{
    //code here
      return fns.reduceRight((acc, fn) => fn(acc), input);
    };
    const add5 = (x) => x + 5;
    const multiply2 = (x) => x * 2;
    const subtract3 = (x) => x - 3;
    const toString = (x) => `${x}`;
    console.log("Pipe");
   
   const result1 = pipe(add5, multiply2, subtract3)(10);// (10 + 5) * 2 - 3 = 27
    console.log(result1);
    const result2 = pipe(toString, add5)(5);  // "5" + 5 = "55"
    console.log(result2); 
   
   console.log("Compose");
    const result3 = compose(add5, multiply2, subtract3)(10);// (10 - 3) * 2 + 5 = 
   19
    console.log(result3);
    const result4 = compose(toString, add5)(5);  // "5" + 5 = "55"
    console.log(result4);