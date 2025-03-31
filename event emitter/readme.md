An Event Emitter is a design pattern used in programming where objects (emitters) can send events that other parts of the program (listeners) can listen to and respond to.

👉 It follows the Observer Pattern, where:

Emitters produce events.

Listeners subscribe to events and execute callbacks when events occur.

How Event Emitters Work
Register a listener for a specific event (on or addListener).

Emit an event (emit) with optional data.

Listener function executes when the event is emitted.
