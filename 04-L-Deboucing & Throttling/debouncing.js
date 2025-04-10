function debounce(fn, delay) {
    let timer;
    return function(...args){
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
        console.log(timer)
    }
}
const fn = debounce((message) => {
    console.log(message);
}, 300);

// Simulate rapid function calls
fn("Hello");
fn("Hello, World!");
fn("Debounced!"); // Only this should log after 300ms
setTimeout(() => {
    fn("Debounced twice");
},400)
    


// Now, let's assume the user types "hello" letter by letter.

// User types 'h' (Time: 0ms)
// input event triggers.

// debounce function is called.

// Timer is set for 500ms.

// The function console.log("API Call with: h") is scheduled.

// User types 'e' (Time: 100ms)
// A new input event triggers.

// The previous timer (set for 'h') is cleared.

// A new timer is set for 500ms from now.

// "API Call with: h" is not executed because the timer was reset.

// User types 'l' (Time: 250ms)
// The previous timer (set for 'e') is cleared.

// A new timer is set for 500ms from now.

// "API Call with: e" is not executed.

// User types 'l' again (Time: 400ms)
// The previous timer (set for 'l') is cleared.

// A new timer is set for 500ms from now.

// "API Call with: l" is not executed.

// User types 'o' (Time: 600ms)
// The previous timer (set for 'l') is cleared.

// A new timer is set for 500ms from now.

// "API Call with: l" is not executed.

// User stops typing (Time: 1100ms)
// No more input events occur.

// The timer (set for 'o' at 600ms) completes.

// "API Call with: hello" executes at 1100ms.

// Final Output in Console
// sql
// Copy
// Edit
// API Call with: hello
// Even though the user typed five letters, the API call happened only once, 500ms after the user stopped typing.

