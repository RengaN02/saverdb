const fs = require('fs')
const error = require('./Errors.js')
var oku = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var yazdir = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
   yazdir('./database.json', {})
   } 
 function Delete(data) {
    if(isNaN(data))if(!data) throw error('Neyi silmem gerektigini anlamadım..!')
    const allData = oku('./database.json')
    if(!allData[data]) throw error('Böyle bir veri yok ki sileyim..!')
    delete allData[data]
    yazdir('./database.json', allData)

}

module.exports = Delete