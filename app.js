const express = require('express')
const app = express()

// Heroku dynamically sets a port
// but dotenv is not even in use yet,
// so process does not exist
const PORT = /*process.env.PORT || */5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})
