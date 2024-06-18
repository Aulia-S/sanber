const { v4: uuidv4 } = require('uuid')

let CATEGORIES = [
  { id: '1', name: 'Elektronik' },
  { id: '2', name: 'Perabotan' },
]

const PRODUCTS = [
  { id: '1', name: 'Laptop', category: 'Elektronik', categoryId: '1' },
  { id: '2', name: 'Meja', category: 'Perabotan', categoryId: '2' },
  { id: '3', name: 'Kursi', category: 'Perabotan', categoryId: '2' },
]

const getAllCategory = (req, res, next) => {
  res.json({
    categories: CATEGORIES,
  })
}

const getCategoryById = (req, res, next) => {
  const categoryId = req.params.cid

  const categoryById = CATEGORIES.find((ctg) => ctg.id === categoryId)

  if (!categoryById) {
    res.status(404).json({
      message: 'Category not found.',
    })
  }

  res.json({
    category: categoryById,
  })
}

const createCategory = (req, res, next) => {
  const name = req.body.name

  const newCategory = {
    id: uuidv4(),
    name,
  }

  CATEGORIES.push(newCategory)

  res.status(201).json({
    message: 'Category added.',
    category: newCategory,
  })
}

const updateCategory = (req, res, next) => {
  const categoryId = req.params.cid
  const name = req.body.name

  const updatedCatagory = CATEGORIES.find((ctg) => ctg.id === categoryId)
  const categoryIndex = CATEGORIES.findIndex((ctg) => ctg.id === categoryId)

  if (!updatedCatagory) {
    return res.status(404).json({
      message: 'Category not found',
    })
  }

  updatedCatagory.name = name
  CATEGORIES[categoryIndex] = updatedCatagory

  res.json({
    message: 'Category updated.',
    category: updatedCatagory,
  })
}

const deleteCategory = (req, res, next) => {
  const categoryId = req.params.cid

  const updatedCategories = CATEGORIES.filter((ctg) => ctg.id !== categoryId)
  CATEGORIES = [...updatedCategories]

  res.status(204).send()
}

const getProductsOfCategory = (req, res, next) => {
  const name = req.query.name
  const categoryId = req.params.cid

  const productsOfCategory = PRODUCTS.filter((prd) => prd.categoryId === categoryId)

  if (productsOfCategory.length === 0) {
    return res.status(404).json({ message: 'Product not found.' })
  }

  if (!name) {
    return res.json({ products: productsOfCategory })
  }

  const result = productsOfCategory.filter((prd) => prd.name.toLowerCase().search(name.toLowerCase()) >= 0)

  if (result.length === 0) {
    return res.status(404).json({ message: 'Product not found.' })
  }

  res.json({
    search: name,
    result,
  })
}

module.exports = { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory, getProductsOfCategory }
