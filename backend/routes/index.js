import Router from 'express'
import Category from './categories.js'
const router =new Router()

router.use('/categories',Category)

export default router