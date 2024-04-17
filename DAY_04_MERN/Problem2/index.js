function customMap(array, callback) {
    const result = [];
  
    for (let i = 0; i < array.length; i++) {
      result.push(callback(array[i], i, array));
    }
  
    return result;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5];
  
  // Using custom map function to double each number
  const doubledNumbers = customMap(numbers, (num) => num * 2);
  console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]
  