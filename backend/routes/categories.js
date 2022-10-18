import Router from 'express'
import category from '../controllers/CategoryController.js'
const router =new Router()

router.get('/',category.getCategory )

export default router