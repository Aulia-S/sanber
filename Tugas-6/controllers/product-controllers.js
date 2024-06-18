const PRODUCTS = [
  { id: '1', name: 'Laptop', category: 'Elektronik' },
  { id: '2', name: 'Meja', category: 'Perabotan' },
]

const getProducts = (req, res, next) => {
  const name = req.query.name

  if (!name) {
    return res.json({ products: PRODUCTS })
  }

  const result = PRODUCTS.filter((prd) => prd.name.toLowerCase().search(name.toLowerCase()) >= 0)

  if (result.length === 0) {
    return res.status(404).json({ message: 'Product not found.' })
  }

  res.json({
    search: name,
    result,
  })
}

module.exports = { getProducts }
