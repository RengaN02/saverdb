const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))

if(!fs.existsSync('./database.json')) {
  write('./database.json', {})
  } 



function extract(key,value) {
    const allData = read('./database.json')
    
    if(isNaN(value)) if(!value) throw error('Value is null!')
    if(typeof value != 'number') throw error('Value is not number!')
    if(allData[key] == undefined) throw error('I cant find that key in database!')
    allData[data] -=value
    write('./database.json', allData)

}

module.exports = extract