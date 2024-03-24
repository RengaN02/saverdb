const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
  write('./database.json', {})
  } 

function push(data,db) {
    const allData = read('./database.json')

          
    if(!allData[data]) {
        allData[data] = []
       write('./database.json',allData)
      } else if(Array.isArray(allData[data]) == false) {
       throw error('Thats not an array!');
      } else


    allData[data].push(db)
    write('./database.json',allData)
    
}



module.exports = push