const express = require('express')
const categoryRoutes = require('./routes/category-routes')
const productRoutes = require('./routes/product-routes')

const app = express()
const port = 3000

app.use(express.json())

app.use('/category', categoryRoutes)

app.use('/product', productRoutes)

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`)
})
