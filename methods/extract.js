const fs = require('fs')
const error = require('./Errors.js')
var oku = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var yazdir = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))

if(!fs.existsSync('./database.json')) {
  yazdir('./database.json', {})
  } 



function extract(data,value) {
    const allData = oku('./database.json')
    
    if(isNaN(value)) if(!value) throw error('Çıkaracağım şeyi belirtmelisin..!')
    if(typeof value != 'number') throw error('Çıkaracağım şey sayı türünden olmalıdır..!')
    if(allData[data] == undefined) throw error('Böyle bir işlem yapamam çünkü veri kaydedilmemiş..!')
    allData[data] -=value
    yazdir('./database.json', allData)

}

module.exports = extract