import {
  firstList
} from './data/first.js';
import {
  secondList
} from './data/second.js';

const button = document.querySelector(".button");
const firstLine = document.querySelector(".lineFirst");
const secondLine = document.querySelector(".lineSecond");

function randomize(list, currentValue) {
  let index = Math.floor(Math.random() * list.length);

  if (list[index] === currentValue || list[index].name === currentValue) {
    return randomize(list, currentValue);
  }
  return index;
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  let dish = firstList[randomize(firstList, firstLine.textContent)];
  if (dish.isIndependent) {
    firstLine.textContent = dish.name;
    secondLine.textContent = 'Хватит';
  } else {
    firstLine.textContent = dish.name;
    secondLine.textContent = secondList[randomize(secondList, secondLine.textContent)];
  }
})
