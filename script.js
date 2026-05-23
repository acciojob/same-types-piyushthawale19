function isSameType(value1, value2) {
  
if(Number.isNaN(value1)&&Number.isNaN(value2)){
	return true;
}
	if(Number.isNaN(value1)||Number.isNaN(value2)){
	return false;
}
	return typeof value1 === typeof value2;
}

// do not change the code below
let value1 = JSON.parse("Enter Start of the Range.");
let value2 = JSON.parse("Enter End Of the Range.");
alert(isSameType(value1, value2));
