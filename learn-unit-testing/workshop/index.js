// "pikachu" -> "https://pokeapi.co/api/v2/pikachu"

function makeUrl(name) {
  return "https://pokeapi.co/api/v2/" + name;
}

const searchParamsToObject = (string) => {
  let obj = {};
  let splitedString = string.split("&");
  for (let i = 0; i < splitedString.length; i++) {
    let propertyAndValue = splitedString[i].split("=");
    obj[propertyAndValue[0]] = propertyAndValue[1];
  }
  return obj
}



const isLeapYear = (year) => {
  if (typeof year !== "number") return "Please enter a number";
  if(year % 100 === 0 && year % 400 !== 0) {
    return false
  }
  if (year < 0) {
    return "Negative numbers are not a valid year."
  }
  if (year % 400 === 0 || year % 4 === 0) {
    return true;
  } else {
    return false
  }
}