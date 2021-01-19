const knex = require('knex')
const app = require('./app')
const { PORT, DATABASE_URL, password, user } = require('./config')

const db = knex({
    client: 'pg',
    connection: {
      host : 'ec2-34-202-5-87.compute-1.amazonaws.com',
      user: user,
      port: PORT,
      database : 'd7533rmldshna6',
      password : password,
      ssl: true
    }
  });

  app.set('db', db)

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`)
})