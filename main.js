const fs = require('fs')

class Database {
    constructor(file) {
        this.file = file;
    }
    read() {
        if(!fs.existsSync(this.file)) write(this.file, {})
        return JSON.parse(fs.readFileSync(this.file,'utf8'))
    }

    write(data) {
        fs.writeFileSync(this.file,JSON.stringify(data,null,4))
    }
    add(key,value) {
        const allData = this.read()

        if(!value) throw this.error('Value is null!')
        if(isNaN(value)) throw this.error('Value is not number!')
        if(!(key in allData)) throw this.error('I cant find that key in database!')
        allData[key] +=value
        this.write(allData)

    }
    clear() {
        this.write({})
    }
    delete(data) {
        if(!data) throw this.error('What i will delete..!')
        const allData = this.read()
        if(!allData[data]) throw this.error('I cant find that what you want to delete in database.')
        delete allData[data]
        this.write(allData)
    
    }
    editArrayData(data, index, db) {
        const allData = this.read()
    
        if(!allData[data]) {
          throw this.error('I cant find that key in database!')
        } else if(Array.isArray(allData[data]) == false) {
          throw this.error('Thats not an array!');
        } else if(isNaN(index)){
          throw this.error('Value is not number!') 
        }
        allData[data][index] = db
        this.write(allData)
    }
    error(message) {
        throw new Error(`Saver.db error: ${message}`);
    }
    extract(key,value) {
        const allData = this.read()
        if(isNaN(value)) if(!value) throw this.error('Value is null!')
        if(typeof value != 'number') throw this.error('Value is not number!')
        if(allData[key] == undefined) throw this.error('I cant find that key in database!')
        allData[key] -= value
        this.write(allData)
    }
    fetch(data) {
        if(!data) throw this.error('What i will fetch from database!')
        const allData = this.read()
        return allData[data]? allData[data] : null
    }
    get(data) {
        return this.fetch(data)
    }
    fetchAll() {
        return this.read()
    }
    find(array, data, value) {
        const allData = this.read()
        if(Array.isArray(allData[array]) == false) {
          throw this.error('Thats not an array!');
        }
        return allData[array].find(u => u[data] === value);
    }
    findIndex(array, data, value) {
        const allData = this.read()
        if(Array.isArray(allData[array]) == false) {
          throw this.error('Thats not an array!');
        }
        return allData[array].findIndex(u => u[data] === value);
    }
    has(data) {
        if(!data) throw this.error('What i will check..!')
        const allData = this.read()
       
           return allData[data]? true : false
    }
    length(data) {
        const allData = this.read()
    
        if(Array.isArray(allData[data]) == false) {
          throw this.error('Thats not an array!');
        }
    
        return allData[data].length
        
    }
    push(data,db) {
        const allData = this.read()
    
              
        if(!allData[data]) {
            allData[data] = []
           this.write(allData)
          } else if(Array.isArray(allData[data]) == false) {
           throw this.error('Thats not an array!');
          } else
    
    
        allData[data].push(db)
        this.write(allData)
        
    }
    set(data,db) {
        if(!data) throw this.error('Undefined data.!')
        if(isNaN(db)) if(!db) throw this.error('Undefined value!')
        const allData = this.read()
        allData[data] = db
        this.write(allData)
    }

}
module.exports = Database;