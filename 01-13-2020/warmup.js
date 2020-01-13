'use strict';

// Arrays

const arr = [1,2,3,4,5,6,7,8,9,10];

const forLoop = (arr) => {
  for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
  };
}

const whileLoop = (arr) => {
  let i = 0;
  while(i < arr.length){
    console.log(arr[i]);
  };
}

const map = (arr, cb) => {
  const newarr = [];
  for(let i=0; i<arr.length; i++){
    newarr.push(cb(arr[i]));
  };
  return newarr;
}

const filter = (arr, cb) => {
  const newArr = [];
  for(let i=0; i<arr.length; i++){
    if(cb(arr[i])){
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const reduce = (arr, cb) => {
  const newValue = 0;
  for(let i=0; i<arr.length; i++){
    newValue = cb(newValue, arr[i]);
  };
  return newValue;
}

// Objects

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people, stuff};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = { ... stuff, cars:[...stuff.cars, 'Honda']};
let newState = {...state, people:['Odie', ...people, 'Garfied'], stuff:{...stuff, cars:[...stuff.cars, 'Honda']}};

console.log(state);