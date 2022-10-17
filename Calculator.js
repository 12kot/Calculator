let number = 13;

let array = [0, 1, 0, 2];

console.log(letsGo(number, array));

function letsGo(numb, array) {
  for (let i = 4; i <= numb; i++) {
    let summ = 0;

    if (i - 2 >= 0)
      summ += array[i - 2];
    
    if (i - 5 >= 0)
      summ += array[i - 5];
    
    if (i / 3 >= 0 && i % 3 == 0)
      summ += array[i / 3];
    
    array.push(summ);
  }

  return array[number];
}
