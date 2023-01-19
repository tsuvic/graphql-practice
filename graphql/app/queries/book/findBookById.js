import Book from "../../models/Book.js";

const findBookById = async (obj, args, context, info) => {
    const id = args.id
    const book = await Book.findByPk(id, { raw: true });

    if (!book) {
        return null
    }
    return book
}

export default findBookById;