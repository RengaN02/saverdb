const fs = require('fs')
const error = require('./Errors.js')
var oku = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var yazdir = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
  yazdir('./database.json', {})
  } 


function push(data,db) {
    const allData = oku('./database.json')

          
    if(!allData[data]) {
        allData[data] = []
       yazdir('./database.json',allData)
      } else if(Array.isArray(allData[data]) == false) {
       throw error('Bu veri array değil');
      } else


    allData[data].push(db)
    yazdir('./database.json',allData)
    
}



module.exports = push