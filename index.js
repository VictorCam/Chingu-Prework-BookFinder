
var find = document.getElementById('find');
var allPosts = document.getElementById('posts');
var button = document.getElementById('button');

function insertpost(img, caption, author, publisher, condition2) {
  var Div0 = document.createElement('div');
  var authortitle = "Author: ";
  var titletitle = "Title: ";
  var publishertitle = "Publisher: ";
  var seebook = "See this book";

  Div0.classList.add('post');
  Div0.setAttribute('title', author);
  Div0.setAttribute('authors', publisher);
  Div0.setAttribute('publisher', condition2);

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
  span1.textContent = (titletitle + "Noobbyyyyy");
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
  button.textContent = (seebook);
  Div3.appendChild(button);

  allPosts.appendChild(Div0);
}

button.addEventListener("click", function()
{
  if(!find.value || find.value == "" || find.value ==null || find.value.trim() == "")
  {
    alert("Please enter a name or author in the search box");
  }
  else
  {
      var img = "https://www.scholastic.com/content5/media/products/22/9781338037722_mres.jpg"
      console.log("input for image is: ", img);

      var caption = "book";
      console.log("input for caption is: ", caption);

      var author = "Mark Succlburg";
      console.log("input for author is: ", author);

      var publisher = "NYTimes Bookz";
      console.log("input for publisher is: ", publisher);

      var condition2 = "fart";
      console.log("input for condition2 is: ", condition2);
    insertpost(img,caption,author,publisher,condition2);
  }
}
);
