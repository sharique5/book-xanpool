import { Response, Request } from "express"
import { IBook } from "./../../types/book"
import Book from "../../models/book"
import { title } from "process"

const getBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books: IBook[] = await Book.find()
    const bookList = books.map(book => { 
        return {
            title: book.title,
            year: book.year,
            _id: book._id
        }
     })
    res.status(200).json({ 
        books: bookList,
        status: 200,
        message: ""
    })
  } catch (error) {
    throw error
  }
}

const getBook = async (req: Request, res: Response): Promise<void> => {
    try {
      const book = await Book.findById(req.params.id)
      res.status(200).json({ 
          book,
          status: 200,
          message: ""
      })
    } catch (error) {
      throw error
    }
  }
  

export { getBooks, getBook }