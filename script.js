const addButton = document.getElementById("add");
const form = document.getElementById("book-form");
const readCheck = document.getElementById("read");
const resetButton = document.getElementById("reset");
const library = document.getElementById("library");


let myLibrary = [];

function Book() {
    this.title = title
    this.author = author
    this.pages = pages
    this.summary = summary
    this.read = read
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    updateLibrary();
}

function updateLibrary() {
    let books = [];
    for (i = 0; i < myLibrary.length; i++) {
        let title = myLibrary[i].title;
        let author = myLibrary[i].author;
        let summary = myLibrary[i].summary;
        let pages = myLibrary[i].pages;
        let read = '';
        if (myLibrary[i].read === true) {
            read = "Read <b>▣</b>";
        } else {
            read = "Not read <b>□</b>";
        }
        let book = `
        <div class="book">
            <div class="title">${title}</div>
            <div class="author">by ${author}</div>
            <div class="summary">${summary}</div>
            <div class="pages">${pages}</div>
            <div class="read">
                <div>${read}</div>
                <img class="delete" src="./images/trash-can-outline.svg" alt="delete" value="${i}">
            </div>
        </div>
        `;
        books.push(book);
    }
    library.innerHTML = books.join('');
    let deleteButton = document.querySelectorAll(".delete");
    deleteButton.forEach(button => {
        button.addEventListener("click", deleteBook);
    });
}

function newBook() {
    const book = new Book();
    book.title = document.getElementById("title").value;
    book.author = document.getElementById("author").value;
    book.pages = document.getElementById("pages").value;
    book.summary = document.getElementById("summary").value;
    book.read = readCheck.value;
    addBookToLibrary(book);
    resetForm();
}

function checkBox() {
    if (readCheck.innerHTML === "■") {
        readCheck.innerHTML = "";
        readCheck.value = false;
    } else {
        readCheck.innerHTML = "■"
        readCheck.value = true;
    }
}

function resetForm() {
    const inputFields = document.getElementsByClassName("text-input");
    readCheck.innerHTML = "";
    for (i = 0; i < inputFields.length; i++) {
        inputFields[i].value = "";
    }
}

function deleteBook(e) {
    index = e.target.getAttribute('value');
    myLibrary.splice(index, 1);
    updateLibrary();
}

addButton.addEventListener("mousedown", newBook);
readCheck.addEventListener("mousedown", checkBox);
resetButton.addEventListener("mousedown", resetForm);
