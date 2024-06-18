const { Router } = require('express')
const { getAllCategory, getCategoryById, createCategory, updateCategory, deleteCategory, getProductsOfCategory } = require('../controllers/category-controllers')

const router = Router()

router.get('/', getAllCategory)

router.get('/:cid', getCategoryById)

router.post('/', createCategory)

router.put('/:cid', updateCategory)

router.delete('/:cid', deleteCategory)

router.get('/:cid/products', getProductsOfCategory)

module.exports = router
