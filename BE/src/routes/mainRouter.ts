import { Router } from "express";
import { UserRouter } from "./UserRoute";


const router = Router()

router.use("/user", UserRouter)


export {
    router as mainRouter
}