const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
   write('./database.json', {})
   } 


function has(data) {
    if(!data) throw error('What i will check..!')
    const allData = read('./database.json')
   
       return allData[data]? true : false
}

module.exports = has