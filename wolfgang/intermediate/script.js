var mydata = JSON.parse(data); // convert string into an object

   console.log(mydata); // prints converted object into the console

   /* Prints data from Object1 */

   document.write("My name is " + mydata[ 0].name + " and I am working as a " + mydata[0 ].position);

    document.write("<hr>"); // new line

   /* Prints data from Object1 */

   document.write("My name is " + mydata[ 1].name + " and I am working as a " + mydata[1 ].position); 