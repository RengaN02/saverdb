const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))

if(!fs.existsSync('./database.json')) {
  write('./database.json', {})
  } 



function add(key,value) {
    const allData = read('./database.json')
    
    if(isNaN(value)) if(!value) throw error('Value is null!')
    if(typeof value != 'number') throw error('Value is not number!')
    if(allData[key] == undefined) throw error('(I cantfind that key in database!')
    allData[key] +=value
    yazdir('./database.json', allData)

}

module.exports = add