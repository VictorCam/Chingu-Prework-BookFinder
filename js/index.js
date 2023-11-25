import { handleBooks } from './handleBooks.js'

const findInput = document.querySelector('#find');
const searchButton = document.querySelector('#button');
const searchInput = document.querySelector("#find");

function handlePress(event) {
  if (event.key === "Enter") {
    searchButton.click();
  }
}

async function handleClick() {
  const searchTerm = findInput.value.trim();

  if (!searchTerm) {
    alert("Please enter a name or author in the search box");
    return;
  }
  let posts = document.querySelectorAll(".post")
  console.log(posts)
  handleBooks.removeBooks(posts);
  await handleBooks.fetchBooks(searchTerm);
}

searchButton.addEventListener("click", handleClick);
searchInput.addEventListener("keyup", handlePress)