// ==================RECURSION=============================


const flattenRecursive = (arr) =>{
    let result = [];
    for(const ele of arr){
        if(Array.isArray(ele)) result = result.concat(flattenRecursive(ele));
        else {result.push(ele);}
    }
    return result;

}

const resultRecursion = flattenRecursive([[[[0]], [1]], [[[2], [3]]], [[4],
    [5]]]);
console.log('recursion', resultRecursion)
// ========================ITERATIVE=========================
const flattenIterative = (arr) =>{
    const stack = [...arr];
    let result = [];
    while(stack.length){
        const ele = stack.pop();
        if(Array.isArray(ele)){
            stack.push(...ele);
        }
        else result.push(ele);
    }
    return result.reverse();
}
const resultIterative = flattenIterative([[[[0]], [1]], [[[2], [3]]], [[4],
    [5]]]);



console.log(resultIterative);


// =================== WITH DEPTH RCURSION===========================


const flattenRecursiveDepth = (arr, depth) => {
    if(depth === 0 ) return arr;
    let result = [];

    for(const ele of arr){
        if(Array.isArray(ele) && depth > 0)  result = result.concat(flattenRecursiveDepth(ele, depth - 1));
        else result.push(ele);
    }
    return result;
}




const resultRecursionDepth = flattenRecursiveDepth([[[[0]], [1]], [[[2], [3]]], [[4],
    [5]]],2);
console.log('recursion', resultRecursionDepth)


// =======================WITH DEPTH ITERATIVE =============================
const flattenIterative = (arr, depth ) =>{

    const stack = arr.map((ele) => ({arr: ele, value : depth}));
    let result = [];
    while(stack.length){
        const {arr, value} = stack.pop();
        if(Array.isArray(arr) && value > 0){
            stack.push(...arr.map(e => (
                {arr: e, value: value -1}
            )
                                 ));
        }
        else result.push(arr);
    }
    return result.reverse();
}
const resultIterativeDepth= flattenIterative([[[[0]], [1]], [[[2], [3]]], [[4],
    [5]]], 2);



console.log(resultIterativeDepth);