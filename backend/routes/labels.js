import Router from 'express'
import labels from '../controllers/CategoryController.js'
const router =new Router()

router.get('/',labels.getLabels )


export default router