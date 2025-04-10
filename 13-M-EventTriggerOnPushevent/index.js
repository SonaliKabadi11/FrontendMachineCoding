
const OriginalPush = Array.prototype.push;
function cb(ele){
    console.log('pushed', ele)
}
Array.prototype.Push = function (...args){
    if(this.OnPush){
        this.OnPush(args);
    }
    return OriginalPush.apply(this, args);
}

Array.prototype.setPushCb = function(cb){
    if(typeof cb === 'function') this.OnPush = cb;
    else console.error('cb is not a function');
}




const arr = [1,2,3,4,5,6]
arr.setPushCb((ele) =>{
    console.log("event triggered.........")
    console.log('Push Item', ele)
})
arr.Push(7)
arr.Push(1,2,3)

console.log('array', arr)
