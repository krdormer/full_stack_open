# Rendering a collection, modules
1. Functional Programming in JS
  1. Higher order functions
    1. Functions are values
      1. Can be assigned to variables
    2. Higher order functions are functions which accept another function as its argument
    3. Composition
      1. Taking one function and giving it to another as a value
      2. Function given to another function as argument is called a 'callback' function
    4. `array.filter()`
      1. Built-in method for JS arrays
      2. Takes a function as argument and returns a new array, filtered by the function it was given
      3. Function is applied to each item in the array
    5. `array.map()`
      1. Built-in method for JS arrays
      2. Takes a function as argument, and transforms the data based on function it was given
      3. Function is applied to each item in the array 
    6. `array.reduce()`
      1. Built-in method for JS arrays
      2. Takes 2 arguments
        1. First, a function to apply to each item in the array
	2. Second, a value type to return
      3. `array.reduce((curr, acc) => curr.value < 10 && acc + curr.value}, 0)`
        1. Adds all items in array that are less than 10, starting from zero
	2. Can be accomplished with any value type
2. Rendering collections
  1. Best practice to iterate over lists with a higher-order function like `map`, `filter`, `reduce`, etc.
  2. Maintains immutability of data
  3. Keys
    1. Required to specify a key on all elements rendered from a list, so the VDOM can track where elements are placed
    2. However, index keys are generally an anti-pattern, key should be something unique 

