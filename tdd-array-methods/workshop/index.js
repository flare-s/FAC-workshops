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


const reduce = (array, callback, accumulator) => {
  let i = 0;
  if (accumulator === undefined) {
    accumulator = array[0];
    i = 1;
  }
  for (; i < array.length; i++) {
    accumulator = callback(accumulator, array[i]);
  }
  return accumulator;
}

const flat = (array, depth = 1) => {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) && depth > 0) {
      arr = arr.concat(flat(array[i], depth - 1));
    } else {
      arr.push(array[i]);
    }
  }
  return arr;
}
