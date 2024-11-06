type Book = {
    name: string;
    author: string;
};

const getAuthor = <T, K extends keyof T>(a: T, b: K) => {
    return a[b];
};

const book: Book = { name: "Some Book", author: "Some Author" };
const author = getAuthor(book, "author");

console.log(author); // Output: "Some Author"
