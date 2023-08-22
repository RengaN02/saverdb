const fs = require('fs')
const error = require('./Errors.js')
var oku = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var yazdir = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
  yazdir('./database.json', {})
  } 


function fetchAll() {
    const allData = oku('./database.json')
    return allData
}

module.exports = fetchAll