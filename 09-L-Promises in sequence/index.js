

const createAsyncTask = () =>{
    const randomval = Math.floor(Math.random() * 10);
    return new Promise((resolve, reject) =>{
       setTimeout(() =>{
        if(randomval > 5){resolve(randomval)}
        else{reject(randomval)}
       }, randomval* 100);
    })
}

const tasks = [
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask,
    createAsyncTask
]


const taskRunnerIterative = async (tasks, cb) => {
    let results = [];
    let errors = [];

    for(const t of tasks){
        try{
            const success = await t();
            results.push(success);
        }
        catch(err){
            errors.push(err);
        }
    }
    cb(results, errors)
}

const taskRunnerRecursion = (tasks, cb) => {
    let results = [];
    let errors = [];
    let curInd = 0;
    let index = curInd;
    index++;
    function helper(tasks, curInd){
        if(curInd >= tasks.length){
            cb(results, errors);
            return;
        }

        tasks[curInd]().then((res) =>{
            results.push(res);
            helper(tasks, index);
        }).catch((err) =>{
            errors.push(err);
            helper(tasks, index)
        })
    }
    helper(tasks, index);
}

taskRunnerIterative(tasks, (res, err) => console.log(res, err));

taskRunnerRecursion(tasks , (res, err) => console.log(res, err));