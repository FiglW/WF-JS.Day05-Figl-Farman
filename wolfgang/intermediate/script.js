var mydata = JSON.parse(data);
var mydatazwei = JSON.parse(datazwei);
var mydatadrei = JSON.parse(datadrei);
var mydatavier = JSON.parse(datavier); // convert string into an object

   console.log(mydata); // prints converted object into the console
   console.log(mydatazwei);
   console.log(mydatadrei);
   console.log(mydatavier);

   /* Prints data from Object1 */

   document.write("My name is " + mydata[ 0].firstname+ " "+mydata[0].lastname+ " and I am working as a " + mydata[0 ].jobtitle);

    document.write("<hr>"); // new line

   /* Prints data from Object2 */

   document.write("My name is " + mydatazwei[ 0].firstname+ " "+mydatazwei[0].lastname+ " and I am working as a " + mydatazwei[0 ].jobtitle);

   document.write("<hr>");

   /*Prints data from Object3 */

   document.write("My name is " + mydatadrei[ 0].firstname+ " "+mydatadrei[0].lastname+ " and I am working as a " + mydatadrei[0 ].jobtitle);

   	document.write("<hr>");

   /*Prints data from Object4 */

   document.write("My name is " + mydatavier[ 0].firstname+ " "+mydatavier[0].lastname+ " and I am working as a " + mydatavier[0 ].jobtitle);
   	document.write("<hr>")