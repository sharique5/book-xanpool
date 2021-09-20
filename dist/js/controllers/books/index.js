"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBook = exports.getBooks = void 0;
const book_1 = __importDefault(require("../../models/book"));
const getBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const books = yield book_1.default.find();
        const bookList = books.map(book => {
            return {
                title: book.title,
                year: book.year,
                _id: book._id
            };
        });
        res.status(200).json({
            books: bookList,
            status: 200,
            message: ""
        });
    }
    catch (error) {
        throw error;
    }
});
exports.getBooks = getBooks;
const getBook = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const book = yield book_1.default.findById(req.params.id);
        res.status(200).json({
            book,
            status: 200,
            message: ""
        });
    }
    catch (error) {
        throw error;
    }
});
exports.getBook = getBook;
