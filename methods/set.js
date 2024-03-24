const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))

if(!fs.existsSync('./database.json')) {
write('./database.json', {})
} 

function set(data,db) {
    if(!data) throw error('Undefined data.!')
    if(isNaN(db)) if(!db) throw error('Undefined value!')
    const allData = read('./database.json')
    allData[data] = db
    write('./database.json',allData)
    
}

module.exports = set
