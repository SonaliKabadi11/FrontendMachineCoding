

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
    let index = 0;
   
    function helper(){
        let curInd = index;
        index++;
        if(curInd >= tasks.length){
            cb(results, errors);
            return;
        }

        tasks[curInd]().then((res) =>{
            results.push(res);
            helper();
        }).catch((err) =>{
            errors.push(err);
            helper()
        })
    }
    helper(tasks, index);
}

taskRunnerIterative(tasks, (res, err) => console.log(res, err));

taskRunnerRecursion(tasks , (res, err) => console.log(res, err));