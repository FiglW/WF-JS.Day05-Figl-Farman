var data = books;
console.log(books.length);
for (var i = 0; i < books.length; i++) {
    var para = document.createElement("div");
    var node = document.createTextNode("Book name "+books[i].title + " Author " + books[i].author );
    para.appendChild(node);

    var element = document.getElementById("books");
    element.appendChild(para);
    var x = document.createElement("IMG");
    x.setAttribute("src", books[i].imagesrc);
    x.setAttribute("width", "250");
    x.setAttribute("height", "400");
    x.setAttribute("alt", "The Pulpit Rock");
    para.appendChild(x);
}

 
 