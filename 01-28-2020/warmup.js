'use strict';

const arr = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (arr) => {
  for(let i = 0; i < arr.length; i++){
    console.log(arr[i]);
  };
}

const whileLoop = (arr) => {
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
    i++;
  };
}

const map = (arr, cb) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    newArr.push(cb(arr[i]));
  };
}

const filter = (arr, cb) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++){
    if(cb(arr[i])){
      newArr.push(arr[i]);
    };
  };
}

const reduce = (arr, cb) => {
  const val;
  for(let i = 0; i < arr.length; i++){
    val = cb(val, arr[i]);
  };
}