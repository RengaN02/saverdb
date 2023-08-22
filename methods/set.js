const fs = require('fs')
const error = require('./Errors.js')
var oku = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var yazdir = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))

if(!fs.existsSync('./database.json')) {
yazdir('./database.json', {})
} 

function set(data,db) {
    if(!data) throw error('Tanımlanmayan değer..!')
    if(isNaN(db)) if(!db) throw error('Tanımlanmayan değer..!')
    const allData = oku('./database.json')
    allData[data] = db
    yazdir('./database.json',allData)
    
}


module.exports = set


