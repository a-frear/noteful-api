const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL, password, user } = require('./config')

const db = knex({
    client: 'pg',
    connection: {
      host : 'ec2-34-202-5-87.compute-1.amazonaws.com',
      user: user,
      database : 'd7533rmldshna6',
      password : password,
      ssl: true
    }
  })

  app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})

/*
The flow of control will go as follows:

We start the server with npm start aka node ./src/server.js
The server.js file requires the app instance from the app.js file
The app.js file creates the express instance, app and exports it
The server.js file creates the Knex instance
The server.js file attaches the Knex instance to the app as a property called 'db'
The server.js tells the app to start listening on a port number
Any request handling middleware can now read the 'db' property on the app to get the Knex instance
*/