



// Akanksha Mate
// ITMD 541-01 Graduate Student

// Exercise #1: minMaxAverage
function minMaxAverage(arr) {
  let total = arr.length;
  let min = Math.min(...arr);
  let max = Math.max(...arr);
  let sum = arr.reduce((acc, num) => acc + num, 0);
  let average = sum / total;
  
  console.log(
    `Total Numbers: ${total}, Min Value: ${min}, Max Value: ${max}, Average: ${average}`
  );
}

// The function was tested with different arrays of numbers.
console.log("Exercise 1:");
minMaxAverage([12, 25, 23, 46, 19, 24, 30, 14]); 
minMaxAverage([11, 25, 13, 15, 20, 12, 82, 16]);
minMaxAverage([1, 42, 32, 12, 22]);

// Exercise #2: countVowels
function countVowels(str) {
  const vowels = "aeiouAEIOU";
  let count = 0;
  
  // The function iterated through each character and counted the vowels.
  for (let char of str) {
    if (vowels.indexOf(char) !== -1) {
      count++;
    }
  }
  return count;
}

// The function was tested with various words.
console.log("\nExercise 2:");
let word1 = "Winter";
let word2 = "Hello World";
let word3 = "JavaScript";

console.log(`${word1}: ${countVowels(word1)} vowels`);
console.log(`${word2}: ${countVowels(word2)} vowels`);
console.log(`${word3}: ${countVowels(word3)} vowels`);

// Exercise #3: sortNumbers
function sortNumbers(arr) {
  // The function created a copy of the array to preserve the original order.
  let sorted = arr.slice().sort((a, b) => a - b);
  return sorted;
}

// The function was tested with different sets of numbers.
console.log("\nExercise 3:");
let arr1 = [8, 12, 2, 13];
let arr2 = [21, 1, 22, 58, 12];
let arr3 = [3, 14, 11, 12, 4, 19];

console.log(`Original Array: [${arr1}] -> Sorted Array: [${sortNumbers(arr1)}]`);
console.log(`Original Array: [${arr2}] -> Sorted Array: [${sortNumbers(arr2)}]`);
console.log(`Original Array: [${arr3}] -> Sorted Array: [${sortNumbers(arr3)}]`);

// Exercise #4: celsiusToFahrenheit
function celsiusToFahrenheit(celsius) {
  let celsiusNumber = Number(celsius);

  // The function checked if the input was a valid number.
  if (isNaN(celsiusNumber)) {
    console.log(`Oops! '${celsius}' was not a valid number.`);
    return;
  }

  let fahrenheit = (celsiusNumber * 9) / 5 + 32;
  console.log(
    `${celsiusNumber.toFixed(1)}°C = ${fahrenheit.toFixed(1)}°F`
  );
}

// The function was tested with numeric and string inputs.
console.log("\nExercise 4:");
celsiusToFahrenheit(30);
celsiusToFahrenheit(0);
celsiusToFahrenheit(100);
celsiusToFahrenheit("35");
celsiusToFahrenheit("85");


// Exercise #5: Introduce People Sorted by 
function introducePeople(people) {
  // The function sorted the people by age in ascending order.
  let sortedPeople = people.slice().sort((a, b) => a.age - b.age);

  // The function created an introduction sentence for each person.
  let introductions = sortedPeople.map(
    (person) => `${person.name} was ${person.age} years old and lived in ${person.city}.`
  );
  
  return introductions;
}

// The function was tested with different groups of people.
console.log("\nExercise 5:");

let people1 = [
  { name: "Akanksha", age: 24, city: "New York" },
  { name: "Pradnya", age: 23, city: "Las vegas" },
  { name: "Satyam", age: 22, city: "Chicago" },
  { name: "Shreya", age: 20, city: "Atlanta" },
  { name: "Aditya", age: 28, city: "Dallas" },
];

console.log("Introductions from group 1:");
console.log(introducePeople(people1));

let people2 = [
  { name: "Sunita", age: 45, city: "Los Angeles" },
  { name: "Purva", age: 30, city: "Seattle" },
  { name: "Nishad", age: 19, city: "San Francisco" },
  { name: "Nihar", age: 29, city: "Miami" },
  { name: "Shreyas", age: 24, city: "San Diago" },
];

console.log("Introductions from group 2:");
console.log(introducePeople(people2));
