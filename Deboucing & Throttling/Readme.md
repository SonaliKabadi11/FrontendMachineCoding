Debouncing is the techinque to limit the execution of the function that gets triggered frequently.It ensures that the function is executed after certain delay, preventing unnecessary calls.

## Example:

- Input search : Trigger API call after the user stops typing.
- Window resize event: Prevent multiple execute while resizing.
- Button clicks: Prevent accidental multiple clicks.

- Throttling is a technique that limits the number of times a function can execute within a specific time interval.

- Even if an event is triggered multiple times, the function will only execute at fixed intervals instead of executing every time.

## Example

- Scroll events (prevent excessive calls while scrolling)
- Window resize events (adjust UI layout efficiently)
- Button clicks (prevent spamming a button)
- API requests (rate limiting API calls)

Debounce = "I'll wait until you stop talking before I respond."

Throttle = "I'll listen to you only once every second, no matter how much you talk."

| Feature          | Debouncing                                                         | Throttling                                                 |
| ---------------- | ------------------------------------------------------------------ | ---------------------------------------------------------- |
| Definition       | Delays function execution until user stops triggering the event    | Limits function execution to once every specified interval |
| Best For         | Search inputs, button clicks, API requests                         | Scroll, resize, mouse movement, rate-limiting APIs         |
| Example Scenario | A search bar that fetches results only after the user stops typing | A function that runs every 1 second while scrolling        |
