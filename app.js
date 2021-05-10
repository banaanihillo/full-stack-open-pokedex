const express = require('express')
const app = express()

// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`)
})

app.get('/health', (_request, response) => {
  response.send('OK')
})

app.get('/version', (_request, response) => {
  response.send('This no longer uses double quotes')
})
