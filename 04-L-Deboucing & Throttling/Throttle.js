
const throttleFnTimeBased = (fn, delay) => {
//code here
let lastExecution;

return function(...args){
    let now =Date.now();
    if(now - lastExecution >= delay){
        fn(...args);
        lastExecution = now
    }
}
}
//Test
const throttledFunction = throttleFnTimeBased((msg) => {
 console.log(msg, Date.now());
}, 2000);





throttledFunction("Call 1"); // Executes immediately
throttledFunction("Call 2"); // Throttled
throttledFunction("Call 3"); // Throttled
setTimeout(() => throttledFunction("Call 4"), 1100);
// Executes after 1.1 seconds
setTimeout(() => throttledFunction("Call 5"), 900);
// throttle
setTimeout(() => throttledFunction("Call 6"), 2100);
// Executes after 2.1 seconds
