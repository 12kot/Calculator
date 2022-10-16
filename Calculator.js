let number = 9;

let array = fill(number);
array[number] = 1;

console.log(letsGo(number - 2, array));

function letsGo(numb, array) {
  for (let i = numb; i > 0; i--) {
    if (i + 2 <= number)
      array[i] += array[i + 2];
    
    if (i + 5 <= number)
      array[i] += array[i + 5];
    
    if (i * 3 <= number)
      array[i] += array[i * 3];
    
    console.log(i + " " + array[i]);
  }

  return array[1];
}
  
function fill(number) {
  let array = [];
  for (let i = 0; i < number; i++)
    array[i] = 0;
  
  return array;
}
