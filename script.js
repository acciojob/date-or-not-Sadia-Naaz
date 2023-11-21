 function isDate(input) {
 try{
		 const date = new Date(input);
		 return !isNaN(date.getTime());
	 } 
	 catch{
	 return false;
	 }
 }
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

