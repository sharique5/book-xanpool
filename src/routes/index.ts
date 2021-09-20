import { Router } from "express"
import { getBooks, getBook } from "../controllers/books"

const router: Router = Router()

router.get("/books", getBooks)

router.get("/book/:id", getBook)

export default router