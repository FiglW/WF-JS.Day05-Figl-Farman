

for (var i = 0; i < books.length; i++){
	let hee = document.createElement("div");
	let para = document.createElement("P");
	para.innerHTML = books[i].title + books[i].author; 
	para.setAttribute("style","font-family:calibri;color:green;");
	hee.appendChild(para);

	let element = document.getElementById("div1");
	element.appendChild(hee);

	let x = document.createElement("img");
	x.setAttribute("src", books[i].imagesrc);
	x.setAttribute("width", "304");
	x.setAttribute("height", "230");
	x.setAttribute("alt", "The bla Book");
	hee.appendChild(x);//irgendwo in den body
var result;
if (books[i].read == "false"){
	result="negative";
	para.setAttribute("style","font-size:1.5em;font-family:Arial;color:red;");


} else {
	result="positive";


}
console.log(result);
}


	
