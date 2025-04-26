

function deepClone(args, seen = new WeakMap()) {

  if(args === null || typeof args !== 'object'){
    return args;
  }

  if(seen.has(args)){
    return seen.get(args);
  }


    const result = Array.isArray(args)? [] : {} ;

    
   seen.set(args, result)
    for(const key in args){
      if(args.hasOwnProperty(key)){
        const value = args[key];

        if(value instanceof Date){
          result[key] = new Date(value);
        }
        else if(value instanceof RegExp){
          result[key] = new RegExp(value.source, value.flags);
        }
        else if( typeof value === 'object'){
          result[key] = deepClone(value, seen);
        }
        else {
          result[key] = value;
        }
      }
    }
    return result;
   }
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
   // Follow up: Adding a circular reference
   original.circularRef = original;
   const cloned = deepClone(original);
   // Test the deep clone behavior
   console.log(cloned);
   //Check if circular reference is handled correctly
   console.log(cloned.circularRef === cloned); // true
   console.log(cloned.circularRef !== original.circularRef); // true
   console.log(cloned.address !== original.address); // true
   console.log(cloned.hobbies !== original.hobbies); // true
   console.log(cloned.birthDate !== original.birthDate); // true
   console.log(cloned.regexTest !== original.regexTest); // true
   console.log(cloned.address.city === original.address.city); // true 
   