var isDate = function (input) {
  //   write your code here
if (Object.prototype.toString.call(input)==='[Object Date]'){
	return !isNaN(input.getTime());
}else if(typeof input==='string'){
	const date = new Date(input);
	return !isNaN(input.getTime());
}else{
	return false;
}
};

Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
