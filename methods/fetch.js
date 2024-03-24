const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
   write('./database.json', {})
   } 


function fetch(data) {
    if(!data) throw error('What i will fetch from database!')
    const allData = read('./database.json')
   
       return allData[data]? allData[data] : null
}

module.exports = fetch