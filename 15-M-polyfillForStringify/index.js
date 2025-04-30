
     // Test example
     const original = {
        name: 'Alice',
        age: 30,
        address: {
        city: 'Wonderland',
        country: 'Fantasy'
        },
        hobbies: ['reading', 'biking'],
        birthDate: new Date(1994, 5, 24),
        regexTest: /abc/i
       };
      console.log( JSON.stringify(original))
  
  function myStringify(  obj, seen = new WeakMap()) {
    if(obj === null ){
      return "null"
    }  
  
    if(typeof obj === 'string' ) return `"${obj}"`;
    
    if(typeof obj === 'number' || typeof obj === 'boolean')   return `${obj}`;
    
    if(typeof obj === 'function' || typeof obj === 'undefined' || typeof obj === 'symbol') return undefined;
     if (obj instanceof Date) return `"${obj.toISOString()}"`;
    if (obj instanceof RegExp) return `"${obj.toString()}"`;
  
    if(Array.isArray(obj)){
     const result = obj.map(ele =>(
        myStringify(ele, seen ) === undefined ? 'null': myStringify(ele, seen))).join(",");
        return `[${result}]`;
      }
    
    if(typeof obj === 'object'){
       if(seen.has(obj)){
        throw new Error("Circular reference detected");
      }
      seen.set(obj);
  
        let result = Object.entries(obj)
          .filter(([key, val]) => typeof val !== 'function' && val !== 'undefined')
          .map(([key, val]) => `"${key}":${myStringify(val, seen)}`)
          .join(",");
      return `${result}`
       throw new Error(`Unsupported data type: ${typeof value}`);
    }
  }
   
  console.log(myStringify(original))
  