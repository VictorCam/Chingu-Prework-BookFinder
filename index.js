var find = document.getElementById('find');
var allPosts = document.getElementById('posts');
var button = document.getElementById('button');
var remove = document.getElementById("post");
var search = document.getElementById("find");
var postlength = document.getElementsByClassName("post");
//note that I reuse some elementid's mutiple times just to keep track where I am inserting into the dom

function insertpost(img, title, author, publisher, caption, link) {
  var Div0 = document.createElement('div');
  var authortitle = "Author: ";
  var titletitle = "Title: ";
  var publishertitle = "Publisher: ";
  var seebook = "See this book";

  Div0.classList.add('post');
  Div0.setAttribute("id", "post");
  Div0.setAttribute('title', title);
  Div0.setAttribute('authors', author);
  Div0.setAttribute('publisher', publisher);

  var Div = document.createElement('div');
  Div.classList.add('post-contents');
  Div0.appendChild(Div);

  var Div2 = document.createElement('div');
  Div2.classList.add('post-image-container');
  Div.appendChild(Div2);

  var images = document.createElement('img');
  images.src = img;
  images.alt = caption;
  Div2.appendChild(images);

  var Div2 = document.createElement('div');
  Div2.classList.add('post-info-container');
  Div.appendChild(Div2);

  var span1 = document.createElement("span");
  span1.classList.add("title")
  span1.textContent = (titletitle + title);
  Div2.appendChild(span1);

  var span2 = document.createElement("span");
  span2.classList.add("authors");
  span2.textContent = (authortitle + author);
  Div2.appendChild(span2);

  var span3 = document.createElement("span");
  span3.classList.add("publisher");
  span3.textContent = (publishertitle + publisher);
  Div2.appendChild(span3);

  var Div3 = document.createElement('div');
  Div3.classList.add('post-check-container');
  Div.appendChild(Div3);

  var button = document.createElement("button");
  button.classList.add('buttoncard');
  button.setAttribute('onclick', "location.href=" + "'" + link + "';");
  button.textContent = (seebook);
  Div3.appendChild(button);

  allPosts.appendChild(Div0);
}

search.addEventListener("keyup", function(event) {
event.preventDefault();
if (event.keyCode === 13) {
    button.click();
}
});

button.addEventListener("click", function()
{
  if(!find.value || find.value == "" || find.value == null || find.value.trim() == "")
  {
    alert("Please enter a name or author in the search box");
  }
  else
  {
  removeposts();
  endpoint = 'https://www.googleapis.com/books/v1/volumes?q=' + find.value;
fetch(endpoint).then(function(response) {
  return response.json();
}).then(function(json) {
  let {items} = json;
  if(items === undefined){
    alert("Please enter a more appropriate response");
  }
  else{
  for(var i = 0; i < items.length; i++) {
  img = items[i].volumeInfo.imageLinks.smallThumbnail;
  title = items[i].volumeInfo.title;
  author = items[i].volumeInfo.authors;
  publisher = items[i].volumeInfo.publisher;
  caption = items[i].volumeInfo.description;
  link = items[i].volumeInfo.infoLink;
  insertpost(img, title, author, publisher, caption, link);
  }
}
})
  }
}
);

function removeposts(){
  if(postlength.length != null){
    for (var j = 0; j < postlength.length; j++) {
      postlength[j].remove();
      j--;
    }
  }
}
