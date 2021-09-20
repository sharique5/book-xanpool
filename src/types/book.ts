import { Document } from "mongoose"

export interface IBook extends Document {
  title: string
  description: string
  year: number
}