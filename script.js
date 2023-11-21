 function isDate(input) {
  if (Object.prototype.toString.call(input) === 
    "[object Date]") {
	 if (isNaN(input.getTime())) {
          return false;
		 
        }
        else {
           return true;
        }
 }
	 else if (typeof input==='string'){ 
		 const date = new Date(input);
		 return !isNaN(date.getTime());
	 } 
	 else{
	 return false;
	 }
 }
// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));

