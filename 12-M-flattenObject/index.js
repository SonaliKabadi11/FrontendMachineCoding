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
