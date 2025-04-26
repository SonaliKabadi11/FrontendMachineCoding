const user = {
    name: "Vishal",
    age: null,
    address: {
    primary: {
    house: "109",
    street: {
    main: "21",
    cross: null,
    },
    },
    secondary: null,
    },
    phones: [
    { type: "home", number: "1234567890" },
    { type: "work", number: null },
    ],
    preferences: null,

   };
   //output
//    {
//     user_name: "Vishal",
//     user_age: null,
//     user_address_primary_house: "109",
//     user_address_primary_street_main: "21",
//     user_address_primary_street_cross: null,
//     user_address_secondary: null,
//     user_phones_0_type: "home",
//     user_phones_0_number: "1234567890",
//     user_phones_1_type: "work",
//     user_phones_1_number: null,
//     user_preferences: null
//    }
   const flattenObject = (obj, prefix = "", result = {}) => {
   //code here
      const prevPrefix = prefix;
   for( let x in obj){
       prefix += '_'+ x;
       if(typeof obj[x] === 'object' && obj[x] !== null){
       
            flattenObject(obj[x], prefix, result)
           prefix = prevPrefix;
       }
       else{
          
           const index = prefix.indexOf(x);
              result[prefix] =  obj[x];
          prefix = prevPrefix;
        
       }
      
   }
   }
   let result = {};
   flattenObject(user, 'user', result);
   console.log(result);


//    Approach 2 
// const flattenObject = (obj, prefix = "", result = {}) => {
//     // Iterate over the keys of the object
//         for (const key in obj) {
//             if (obj.hasOwnProperty(key)) {
//                 const newKey = prefix ? `${prefix}_${key}` : key;
//                 if (Array.isArray(obj[key])) {
//                 // Handle arrays first, flatten each element with index
//                     obj[key].forEach((item, index) => {
//                     flattenObject(item, `${newKey}_${index}`, result);
//                 });
//                 } else if (typeof obj[key] === "object" && obj[key] !== null) {
//                     // Recursively flatten nested objects
//                     flattenObject(obj[key], newKey, result);
//                 } else {
//                     // Assign primitive values or `null` directly to the result
//                     result[newKey] = obj[key];
//                 }
//             }
//         }
//     return result;
// };
