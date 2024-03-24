const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
  write('./database.json', {})
  } 

function fetchAll() {
    return allData = read('./database.json')
}

module.exports = fetchAll