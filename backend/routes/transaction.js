import Router from 'express'
import transaction from '../controllers/CategoryController.js'
const router =new Router()

router.get('/',transaction.getTransaction )
router.post('/',transaction.postTransaction)
router.delete('/',transaction.deleteTransaction)

export default router