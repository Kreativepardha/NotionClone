import { Router } from "express"
import { LoginController, RegisterController } from "../controllers/userController"
import { AuthLimiter } from "../utils/config/rateLimit"


const router = Router()

router.use('/register', AuthLimiter,RegisterController)
router.use('/login', AuthLimiter,LoginController)

export { router as UserRouter }