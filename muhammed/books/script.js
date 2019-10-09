var data = books;
console.log(books.length);
for (var i = 0; i < books.length; i++) {
    var para = document.createElement("div");
    var node = document.createTextNode(books[i].title + books[i].author);
    para.appendChild(node);

    var element = document.getElementById("div1");
    element.appendChild(para);
    var x = document.createElement("IMG");
    x.setAttribute("src", books[i].imagesrc);
    x.setAttribute("width", "304");
    x.setAttribute("height", "228");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
}

 
 