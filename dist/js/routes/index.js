"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const books_1 = require("../controllers/books");
const router = (0, express_1.Router)();
router.get("/books", books_1.getBooks);
router.get("/book/:id", books_1.getBook);
exports.default = router;
