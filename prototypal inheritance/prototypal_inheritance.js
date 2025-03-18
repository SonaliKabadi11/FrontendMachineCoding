// Prototypal inheritance is the foundation of object-oriented programming in JavaScript. It allows objects to inherit properties and methods from other objects through the **prototype chain**.



// ## ✅ **What is a Prototype?**
// - Every JavaScript object has an internal property called `[[Prototype]]`, which points to another object (or `null`).  
// - This `[[Prototype]]` is accessible using `__proto__` or through `Object.getPrototypeOf()`.

// ---

// ### ✅ **How Prototypal Inheritance Works**
// 1. When you try to access a property or method on an object:  
//    - JavaScript first looks for it **on the object itself**.  
//    - If not found, it looks up the **prototype chain** until it finds the property (or reaches `null`).  

// 2. The prototype chain allows one object to inherit from another.  

// ---

// ### ✅ **Example 1: Basic Prototypal Inheritance**

// Parent object
const parent = {
  greet: function () {
    console.log('Hello from parent!');
  }
};

// Child object inherits from parent
const child = Object.create(parent);

child.greet(); // Output: Hello from parent!


// ### 🔎 **How It Works**
// 1. `Object.create(parent)` creates a new object whose `[[Prototype]]` points to `parent`.  
// 2. When `child.greet()` is called:
//    - JavaScript first looks for `greet` on `child` → **Not found**  
//    - Looks up the prototype chain → **Found on parent**  
//    - Calls `greet()` from `parent`  

// ---

// ### ✅ **Example 2: Setting Custom Properties in Prototype**

function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, my name is ${this.name}`);
};

const person1 = new Person('Sonali');
person1.sayHello(); // Output: Hello, my name is Sonali


// ### 🔎 **How It Works**
// 1. `Person` is a **constructor function**.  
// 2. `Person.prototype` defines a `sayHello()` method.  
// 3. `person1` is created using `new Person('Sonali')`:
//    - `person1.__proto__` → points to `Person.prototype`  
// 4. `sayHello()` is not found on `person1`, so JavaScript looks up the prototype chain and finds it on `Person.prototype`.  

// ---

// ### ✅ **Example 3: Inheriting from Another Constructor**
// You can create inheritance between constructors using `Object.create()`:


function Animal(name) {
  this.name = name;
}

Animal.prototype.speak = function () {
  console.log(`${this.name} makes a sound`);
};

function Dog(name, breed) {
  Animal.call(this, name); // Inherit properties
  this.breed = breed;
}

// Inherit methods using prototype chaining
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

Dog.prototype.bark = function () {
  console.log(`${this.name} barks`);
};

const dog = new Dog('Rex', 'Labrador');
dog.speak(); // Output: Rex makes a sound
dog.bark();  // Output: Rex barks


// ### 🔎 **How It Works**
// 1. `Dog` calls `Animal` using `call()` → Inherits properties from `Animal`.  
// 2. `Dog.prototype = Object.create(Animal.prototype)` → Inherits methods from `Animal`.  
// 3. `Dog.prototype.constructor = Dog` → Fixes the constructor reference.  
// 4. Prototype chain:
// ```
// dog → Dog.prototype → Animal.prototype → Object.prototype → null
// ```

// ---

// ## ✅ **Prototype Chain Visualization**
// For the `Dog` example:
// ```
// dog → Dog.prototype → Animal.prototype → Object.prototype → null
// ```

// 👉 When `dog.speak()` is called:
// 1. Looks on `dog` → **Not found**  
// 2. Looks on `Dog.prototype` → **Not found**  
// 3. Looks on `Animal.prototype` → **Found**  

// 👉 When `dog.bark()` is called:
// 1. Looks on `dog` → **Not found**  
// 2. Looks on `Dog.prototype` → **Found**  

// ---

// ## ✅ **Key Concepts**
// | Concept | Explanation |
// |---------|-------------|
// | **Prototype** | An object that other objects inherit from. |
// | **Prototype Chain** | Chain of objects used to resolve properties and methods. |
// | **Object.create()** | Creates a new object and sets its `[[Prototype]]` to a specified object. |
// | **Constructor Function** | A function used with `new` to create objects and set up inheritance. |
// | **Prototype Property** | Property on constructor functions to define methods for inheritance. |
// | **call()** | Calls a function with a specified `this` value and arguments. |

// ---

// ## ✅ **Summary**
// ✔️ Objects inherit from other objects via the prototype chain.  
// ✔️ `Object.create()` sets up prototype inheritance directly.  
// ✔️ Constructor functions + `prototype` allow reusable inheritance.  
// ✔️ Methods and properties are resolved through the prototype chain.  

// ---

