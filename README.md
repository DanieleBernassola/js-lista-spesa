<!-- Data una lista della spesa -->

- creo un array shoppingList con elementi la lista della spesa

<!-- stampare sulla pagina gli elementi della lista individualmente con un ciclo while. -->

- creo una variabile count e la inizializzo a 0

- WHILE (count < shoppingList.length){
    const li = document.createElement('li');
    li.innerText = shoppingList[count];
    ul.append(li);
    count++;
}

- la ul avrà un id(list) nell'HTML