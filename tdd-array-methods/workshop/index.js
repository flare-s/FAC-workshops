function map(array, callback) {
  let arr =[];
  for (let i = 0; i <array.length; i++) {
    arr.push(callback(array[i]));
  }
  return arr;

}

const filter = (array, callback) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if(callback(array[i])) {
      arr.push(array[i])
    } else {
      continue;
    }
  }
  return arr;
}

const every = (array, callback) =>{
  for (let i = 0; i < array.length; i++) {
    if (!callback(array[i])) {
      return false
    }
  }
  return true;
}

const some = (array, callback) =>{
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return true
    }
  }
  return false;
}

const find = (array, callback) =>{
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return array[i];
    }
  }
  return undefined;
}
