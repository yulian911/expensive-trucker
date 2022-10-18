import Router from 'express'
import category from '../controllers/CategoryController.js'
const router =new Router()

router.get('/',category.getCategory )
router.post('/',category.postCategory )

export default router