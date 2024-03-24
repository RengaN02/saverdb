Saver Database Module
=============================
![Downloads](https://img.shields.io/npm/dt/saver.db?color=%230099ff&label=Downloads)
![Version](https://img.shields.io/npm/v/saver.db?color=%230099ff&label=Version)

Basically a database module

#

# Installation

```npm
npm i saver.db
```

#

# Examples
## Javascript
```javascript
  const db = require("saver.db");

  db.set(`UserId`, "368695088718544896"); // ---> Create user data
  db.add(`Usernumber`, 5); // ---> Add user data this value
  db.extract(`Usernumber`, 5);// ---> Extract this value from user data
  db.delete("UserAvatar"); // ---> Delete user data
  db.push(`User`, `RengaN`); // ---> Push to array
  db.has("User"); // ---> True Or False
  db.fetch(`User`); // ---> Fetch user data
  db.get(`User`); // ---> Fetch user data
  db.fetchAll(); // ---> Fetch all data
  db.clear(); // ---> Deletes all data

```
## Typescript
```typescript
  import * as db from "saver.db"

  db.set(`UserId`, "368695088718544896"); // ---> Create user data
  db.add(`Usernumber`, 5); // ---> Add user data this value
  db.extract(`Usernumber`, 5);// ---> Extract this value from user data
  db.Delete("UserAvatar"); // ---> Delete user data
  db.push(`User`, `RengaN`); // ---> Push to array
  db.has("User"); // ---> True Or False
  db.fetch(`User`); // ---> Fetch user data
  db.get(`User`); // ---> Fetch user data
  db.fetchAll(); // ---> Fetch all data
  db.clear(); // ---> Deletes all data
```
#



# Bug Report
Contact with rengan from discord 

