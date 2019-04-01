# rest-api app
REST API built with Express and Sequelize

List of user routes:
| Route          | HTTP   | Description                 |
|----------------|--------|-----------------------------|
| /api/users     | GET    | Get all the users info      |
| /api/users/:id | GET    | Get a single user info      |
| /api/users     | POST   | Create a user               |
| /api/users/:id | DELETE | Delete a user               |
| /api/users/:id | PUT    | Update a user with new info |
| /api/signin    | POST   | Sign user in                |
| /api/signup    | POST   | Sign user up                |


## Usage
Make sure you have Node.js and npm installed in your computer and then run these commands:
```console
$ npm install
$ npm start
```

Access the API via `http://localhost:3000/api`