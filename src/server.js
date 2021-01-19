const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL, password, user } = require('./config')

const db = knex({
    client: 'pg',
    connection: {
      host : '34.201.135.7',
      user: user,
      port: 5432,
      database : 'd7533rmldshna6',
      password : password,
      ssl: true
    }
  })

  app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})