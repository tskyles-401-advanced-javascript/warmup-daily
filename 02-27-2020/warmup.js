'use strict';

const forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  };
}

const whileLoop = (arr) => {
  let count = 0;
  while(count < arr.length){
    console.log(arr[i]);
  };
}

const map = (arr, cb) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]));
  };
  return newArr;
}

const filter = (arr, cb) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      newArr.push(arr[i]);
    };
  };
  return newArr;
}