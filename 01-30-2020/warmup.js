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

const reduce = (arr, cb, newThing) => {
  for(let i = 0; i < arr.length; i++){
    newThing = cb(newThing, arr[i], i);
  }
  return newThing;
}

const people = ['Kookla','Fran','Ollie'];

const stuff = {
  tv: 'huge',
  radio: 'old',
  toothbrush: 'frayed',
  cars: ['Toyota','Mazda']
}

let state = {people: [...people], stuff: {...stuff}};

let newPeople = ['Odie', ...people, 'Garfield'];
const newStuff = {...stuff, cars: [...stuff.cars, 'Honda']};
let newState = {people: ['Odie', ...people, 'Garfield'], stuff: {...stuff, cars: [...stuff.cars, 'Honda']}};