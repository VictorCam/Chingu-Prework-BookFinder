import { createElement } from './createElements.js';

async function fetchBooks(searchTerm) {
    const endpoint = 'https://www.googleapis.com/books/v1/volumes?q=' + searchTerm;

    try {
        const response = await fetch(endpoint);
        const json = await response.json();
        const { items } = json;

        if (!items) {
            alert("Please enter a more appropriate response");
            return;
        }

        displayBooks(items);
    } catch (error) {
        console.error('An error occurred:', error);
    }
}

function displayBooks(items) {
    items.forEach(item => {
        const book = {}
        book.img = item.volumeInfo.imageLinks.smallThumbnail;
        book.title = item.volumeInfo.title;
        book.author = item.volumeInfo.authors;
        book.publisher = item.volumeInfo.publisher;
        book.caption = item.volumeInfo.description;
        book.link = item.volumeInfo.infoLink;
        createPost(document.getElementById('posts'), book);
    });
}

function removeBooks(postElements) {
    if (postElements.length != null) {
        console.log('length', postElements.length);
        for (let i = 0; i < postElements.length; i++) {
            postElements[i].remove();
        }
    }
}

function createPost(selector, { img, title, author, publisher, caption, link }) {
    const postContainer = createElement.div('post');
    postContainer.setAttribute("id", "post");
    postContainer.setAttribute('title', title);
    postContainer.setAttribute('authors', author);
    postContainer.setAttribute('publisher', publisher);

    const postContents = createElement.div('post-contents');
    postContainer.appendChild(postContents);

    const postImageContainer = createElement.div('post-image-container');
    postContents.appendChild(postImageContainer);

    const postImage = createElement.img(img, caption);
    postImageContainer.appendChild(postImage);

    const postInfoContainer = createElement.div('post-info-container');
    postContents.appendChild(postInfoContainer);

    const titleSpan = createElement.span('title', 'Title: ' + title);
    postInfoContainer.appendChild(titleSpan);

    const authorSpan = createElement.span('authors', 'Author: ' + author);
    postInfoContainer.appendChild(authorSpan);

    const publisherSpan = createElement.span('publisher', 'Publisher: ' + publisher);
    postInfoContainer.appendChild(publisherSpan);

    const postCheckContainer = createElement.div('post-check-container');
    postContents.appendChild(postCheckContainer);

    const buttonElement = createElement.button('buttoncard', 'See this book', link);
    postCheckContainer.appendChild(buttonElement);

    selector.appendChild(postContainer);
}

const handleBooks = {
    fetchBooks,
    displayBooks,
    removeBooks
}

export { handleBooks };