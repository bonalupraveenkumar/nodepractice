const path = require('path')

const filePath =  path.join('/content','subFolder','test.txt')

const absloutePath = path.resolve(__dirname,'/content','subFolder','test.txt')

const pathValues ={
    split : path.sep,
    filePath : filePath,
    base : path.basename(filePath),
    absPath:absloutePath

}
console.log(pathValues)