'use strict';

const shoppingList = ['Pane', 'Salame', 'Acqua', 'Pomodori', 'Patate', 'Gelati'];
let count = 0;

const ul = document.getElementById('list');

while (count < shoppingList.length){
    const li = document.createElement('li');
    li.innerText = shoppingList[count];
    ul.append(li);
    count++;
}