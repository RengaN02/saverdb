const fs = require('fs')
const error = require('./Errors.js')
var oku = (files) => JSON.parse(fs.readFileSync(files,'utf8'))
var yazdir = (files,data) => fs.writeFileSync(files,JSON.stringify(data,null,4))
if(!fs.existsSync('./database.json')) {
    yazdir('./database.json', {})
    } 


async function clear(confirm) {
    const allData = oku('./database.json')
if(Object.keys(allData).length > 0) {

    if(!confirm) throw error('Lütfen değer yerine true veya false değeri verin [true : Tüm datayı sil ama aynı zamanda yedek dosya oluştur.] [false : Datayı silme!]');
    
    if(confirm == true){
        if (!fs.existsSync('./backup')){
            fs.mkdirSync('./backup')
            var date = Date.now()
                yazdir(`./backup/${date}.txt`,allData)
               await yazdir('./database.json',{})
} else if (fs.existsSync('./backup')){
    var date = Date.now()
        yazdir(`./backup/${date}.txt`,allData)
       await yazdir('./database.json',{})
}


    } 
}
}

module.exports = clear