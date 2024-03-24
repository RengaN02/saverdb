const fs = require('fs')
const error = require('./Errors.js')
var read = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var write = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
   write('./database.json', {})
   } 
 function Delete(data) {
    if(isNaN(data))if(!data) throw error('What i will delete..!')
    const allData = read('./database.json')
    if(!allData[data]) throw error('I cant find that what you want to delete in database.')
    delete allData[data]
    write('./database.json', allData)

}

module.exports = Delete