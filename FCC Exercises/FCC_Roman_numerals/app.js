//var emptyString = "";
//var romanSingle = ["I", "V", "X"];
//var romanDouble = ["X", "L", "C"];
//var romanTriple = ["C", "D", "M"];
//var romanQuad = ["M", "V", "L"];
//
//function convertToRoman(num) {
//	num = num.toString();
//	var length = num.length;
//	if (length === 1) {
//		digits(num, romanSingle);
//	}
//	if (length === 2) {
//		digits(num[0], romanDouble);
//		digits(num[1], romanSingle);
//	}
//	if (length === 3) {
//		digits(num[0], romanTriple);
//		digits(num[1], romanDouble);
//		digits(num[2], romanSingle);
//	}
//	if (length === 4) {
//		digits(num[0], romanQuad);
//		digits(num[1], romanTriple);
//		digits(num[2], romanDouble);
//		digits(num[3], romanSingle);
//	}
//	console.log(emptyString);
//}
//
//convertToRoman(1023);
//
//function digits(str, number) {
//	switch (str) {
//	case "1":
//		emptyString += number[0];
//		break;
//	case "2":
//		emptyString += number[0] + number[0];
//		break;
//	case "3":
//		emptyString += number[0] + number[0] + number[0];
//		break;
//	case "4":
//		emptyString += number[0] + number[1];
//		break;
//	case "5":
//		emptyString += number[1];
//		break;
//	case "6":
//		emptyString += number[1] + number[0];
//		break;
//	case "7":
//		emptyString += number[1] + number[0] + number[0];
//		break;
//	case "8":
//		emptyString += number[1] + number[0] + number[0] + number[0];
//		break;
//	case "9":
//		emptyString += number[0] + number[2];
//		break;
//	}
//}


var romanSingle = ["I", "V", "X"];
var romanDouble = ["X", "L", "C"];
var romanTriple = ["C", "D", "M"];
var romanQuad = ["M", "V", "L"];


function digits(str, number) {
  var string = ""
	switch (str) {
	case "1":
		return number[0];
	case "2":
		return number[0] + number[0];
	case "3":
		return number[0] + number[0] + number[0];
	case "4":
		return number[0] + number[1];
	case "5":
		return number[1];
	case "6":
		return number[1] + number[0];
	case "7":
		return number[1] + number[0] + number[0];
	case "8":
		return number[1] + number[0] + number[0] + number[0];
	case "9":
		return number[0] + number[2];
	default:
		return "";
	}
}

function convertToRoman(num) {
  var emptyString = "";
	num = num.toString();
	var length = num.length;
	if (length === 1) {
		emptyString = digits(num, romanSingle);
	}
	if (length === 2) {
		emptyString = digits(num[0], romanDouble) + digits(num[1], romanSingle);
	}
	if (length === 3) {
		emptyString = digits(num[0], romanTriple) + digits(num[1], romanDouble) + digits(num[2], romanSingle);
	}
	if (length === 4) {
		emptyString = digits(num[0], romanQuad) + digits(num[1], romanTriple) + digits(num[2], romanDouble) + digits(num[3], romanSingle);
	}
	return emptyString;
}
console.log(convertToRoman(2014));
