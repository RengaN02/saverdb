Saver Database Module And API
=============================
![Downloads](https://img.shields.io/npm/dt/saver.db?color=%230099ff&label=Downloads)
![Version](https://img.shields.io/npm/v/saver.db?color=%230099ff&label=Version)



With this module, you can easily add data to json.

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
  db.divide(`Usernumber`, 5); // ---> Divide user data by this value
  db.extract(`Usernumber`, 5);// ---> Extract this value from user data
  db.multiply(`Usernumber`, 5); // ---> Multiply user data by this value
  db.delete("UserAvatar"); // ---> Delete user data
  db.push(`User`, `RengaN`); // ---> Push to array
  db.has("User"); // ---> True Or False
  db.fetch(`User`); // ---> Fetch user data
  db.get(`User`); // ---> Fetch user data
  db.fetchAll(); // ---> Fetch all data
  db.clear(); // ---> Deletes all data and also creates a backup file.

```
## Typescript
```typescript
  import * as db from "saver.db"

  db.set(`UserId`, "368695088718544896"); // ---> Create user data
  db.add(`Usernumber`, 5); // ---> Add user data this value
  db.divide(`Usernumber`, 5); // ---> Divide user data by this value
  db.extract(`Usernumber`, 5);// ---> Extract this value from user data
  db.multiply(`Usernumber`, 5); // ---> Multiply user data by this value
  db.Delete("UserAvatar"); // ---> Delete user data
  db.push(`User`, `RengaN`); // ---> Push to array
  db.has("User"); // ---> True Or False
  db.fetch(`User`); // ---> Fetch user data
  db.get(`User`); // ---> Fetch user data
  db.fetchAll(); // ---> Fetch all data
  db.clear(); // ---> Deletes all data and also creates a backup file.
```
#



# Bugs Report

### RengaN

[Discord](https://discord.com/users/368695088718544896)

