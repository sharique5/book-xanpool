import { model, Schema } from "mongoose"
import { IBook } from "./../types/book"

const bookSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    year: {
      type: Number,
      required: true,
    },
  }
)

export default model<IBook>("book", bookSchema)