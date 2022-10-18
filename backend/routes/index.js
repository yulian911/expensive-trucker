import Router from 'express'
import Category from './categories.js'
import Transaction from './transaction.js'
import Labels from './labels.js'
const router =new Router()

router.use('/categories',Category)
router.use('/transaction',Transaction)
router.use('/labels',Labels)

export default router