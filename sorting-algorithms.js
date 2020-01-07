// Sorting is considered to be an important concept in many programming languages as it helps us locate 
// elements in a faster and easier manner

// Bubble Sort
bubblesort = (array) => {
  let swapped = false 

  do {
    swapped = false
    array.forEach((current, i) => {
      console.log(`\n Current is: ${current} and i is: ${i} \n`);
      
      console.log(array.join(' '))

      if (current > array[i + 1]) {
        const temp = current
        console.log(array.join(' '), '\n')
        
        array[i] = array[i + 1]
        array[i + 1] = temp
        swapped = true
      }

    })
  } while(swapped)

  console.log(array.join(' '))
  return array
}


const numbers = [8,5,6,9,3,1,4,2,7,10,];
bubblesort(numbers);


betterBubbleSort = (array) => {
  console.log(array.sort((a, b) => a - b));
}

betterBubbleSort(numbers);