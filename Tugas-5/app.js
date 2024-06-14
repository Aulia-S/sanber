const express = require('express')
const path = require('path')

const app = express()
const port = 3000

// Middleware untuk log setiap permintaan
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`)
  next()
})

// serve static file
app.use(express.static(path.join(__dirname, 'public')))

app.get('/hello', (req, res, next) => {
  res.send({
    message: 'Success fetch message',
    data: 'Hello World!',
  })
})

app.get('/user', (req, res, next) => {
  res.send({
    message: 'Success fetch user',
    data: {
      id: 1,
      name: 'Budi',
      username: 'budidu',
      email: 'budidu@mail.com',
    },
  })
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
