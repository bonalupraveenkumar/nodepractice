const {readFile,writeFile} = require('fs')

console.log('Start');

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const file1 = result;
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const file2 = result;
    
        writeFile(
            './content/result-async.txt',
            `Here is the result ${file1} , ${file2}`,{flag:'a'},
             (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
               console.log('Done with this Task ');


             }
            )
    })
})
console.log('Starting  the next task ');


