# Saver Database Module  
A lightweight JSON-based database for Node.js projects.  

![Downloads](https://img.shields.io/npm/dt/saver.db?color=%230099ff&label=Downloads)  
![Version](https://img.shields.io/npm/v/saver.db?color=%230099ff&label=Version)  

---

## Installation  

```bash
npm i saver.db
```

---

## Usage Examples  

### JavaScript  

```javascript
const Database = require("saver.db");

// Initialize the database
const db = new Database('./database.json');

// Set a value
db.set('UserId', '368695088718544896');

// Add a number to an existing value
db.add('UserNumber', 5);

// Subtract a number from an existing value
db.extract('UserNumber', 2);

// Delete a specific key
db.delete('UserAvatar');

// Push a value to an array
db.push('UserList', 'John Doe');

// Check if a key exists
console.log(db.has('UserList')); // true or false

// Fetch a specific value
console.log(db.fetch('UserList'));

// Fetch all data
console.log(db.fetchAll());

// Clear the database
db.clear();
```

---

### TypeScript  

```typescript
import Database from "saver.db";

// Initialize the database
const db = new Database('./database.json');

// Set a value
db.set('UserId', '368695088718544896');

// Add a number to an existing value
db.add('UserNumber', 5);

// Subtract a number from an existing value
db.extract('UserNumber', 2);

// Delete a specific key
db.delete('UserAvatar');

// Push a value to an array
db.push('UserList', 'John Doe');

// Check if a key exists
console.log(db.has('UserList')); // true or false

// Fetch a specific value
console.log(db.fetch('UserList'));

// Fetch all data
console.log(db.fetchAll());

// Clear the database
db.clear();
```

---

### Features  
1. **Lightweight:** Uses a JSON file to store and manage data.  
2. **Simple API:** Provides methods to create, read, update, and delete data.  
3. **TypeScript Support:** Fully supports type definitions for better development experience.  

---

### Notes  
- By default, the database file is created at `./database.json`. To use a custom file path:  
  ```javascript
  const db = new Database('./custom/path/database.json');
  ```  