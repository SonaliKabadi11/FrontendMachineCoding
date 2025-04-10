class EventEmitter {
    constructor() {
        this.event = new Map();
    }
    // Subscribe to an event
    subscribe(eventName, callback) {
       if(typeof callback !== 'function') throw new Error('callback should be a functon');

       if(!this.event.has(eventName)){
        this.event.set(eventName, new Map());
       }

       const id = Symbol();

       let subscriptions = this.event.get(eventName);
       subscriptions.set(id, callback);

       return{
        remove: () =>{
            if(!subscriptions.has(id)) throw new Error('no listeners...');
            else{
                subscriptions.delete(id);
            }
        }
       }

    }

    // Emit an event
    emit(eventName, ...args) {
        if(!this.event.has(eventName)) throw new Error('event not found');
        const subscriptions = this.event.get(eventName);
       for(let subs of subscriptions){
           console.log(subs[1](...args))
       }

    }
   }
   // Example usage:
   const emitter = new EventEmitter();
   const subscription = emitter.subscribe("modify", (link) => {
    console.log(`Modified: ${link}`);
   });
   emitter.emit("modify", "test@gmail.com");
   subscription.remove();
   // No event will get published as it is removed
   emitter.emit("modify", "test@gmail.com");
   // No event found
   emitter.emit("noEventfount", "test@gmail.com");
   
