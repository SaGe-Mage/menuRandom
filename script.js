const button = document.querySelector(".button");
const firstLine = document.querySelector(".lineFirst");
const secondLine = document.querySelector(".lineSecond");
const firstList = [
  {name: 'Жульен', isIndependent: true},
  {name: 'Паста Карбонара', isIndependent: true},
  {name: 'ВОК Лапша', isIndependent: true},
  {name: 'ВОК Рис', isIndependent: true},
  {name: 'Фетучини', isIndependent: true},
  {name: 'Рагу', isIndependent: true},
  {name: 'Плов', isIndependent: true},
  {name: 'Гырдбзя', isIndependent: true},
  {name: 'Тыква по-гречески', isIndependent: true},
  {name: 'Рис', isIndependent: false},
  {name: 'Макароны', isIndependent: false},
  {name: 'Греча', isIndependent: false},
  {name: 'Булгур', isIndependent: false},
  {name: 'Перловка', isIndependent: false},
  {name: 'Картошка', isIndependent: false},
  {name: 'Горох', isIndependent: false},
  {name: 'Капуста', isIndependent: false}
];
const secondList = [
  'Рыба',
  'Котлета',
  'Пердечки',
  'Мясо',
  'Курица',
  'Сосиски',
  'Тушёнка',
  'Килька в томатном соусе'
];

function rend(list, currentValue) {
  let a = Math.floor(Math.random() * list.length);

  if (list[a] === currentValue || list[a].name === currentValue) {
    return rend(list, currentValue);
  } else {
    return a;
  }
}

button.addEventListener("click", (event) => {
  event.preventDefault();
  let n = firstList[rend(firstList, firstLine.textContent)];
  if (n.isIndependent) {
    firstLine.textContent = n.name;
    secondLine.textContent = 'Хватит';
  } else {
    firstLine.textContent = n.name;
    secondLine.textContent = secondList[rend(secondList, secondLine.textContent)];
  }
})