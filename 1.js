//1
// String
let stringVariable = "Hello, World!";
console.log("String variable:", stringVariable);
// Number
let numberVariable = 772;
console.log("Number variable:", numberVariable);
// Boolean
let booleanVariable = true;
console.log("Boolean variable:", booleanVariable);
// Undefined
let undefinedVariable;
console.log("Undefined variable:", undefinedVariable);
// Null
let nullVariable = null;
console.log("Null variable:", nullVariable);

//2
function celsiusToFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32;
    console.log(celsius + "°C is equal to " + fahrenheit + "°F.")
}
celsiusToFahrenheit(25); 
celsiusToFahrenheit(0);

//3
function  checkEvenOrOdd(number){
    if (number %2 ==0){
        console.log("even");
    }
    else{
        console.log("odd");
    }
}
checkEvenOrOdd(17);
checkEvenOrOdd(0);

//4
let fruits =["apple","banana","cherry","dates","kiwi"]
for (let i = 0 ; i<fruits.length ;i++){
    console.log("fruit:",fruits[i]);
}

//5
function calculateSum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    console.log("The sum of the array elements is: " + sum);
}
calculateSum([5, 6, 7, 8, 9]);
calculateSum([1, -3, 17, -8]); 

//6
function findLargestNumber(numbers) {
    let largest = numbers[0]; 
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    console.log("The largest number is:", largest);
}
findLargestNumber([16, 65, 20, 99, 123]);

//7
function calculateFactorial(n) {
    if (n < 0) {
        console.log("Factorial is not defined for negative numbers.");
        return;
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log("The factorial of " + n + " is: " + factorial);;
}
calculateFactorial(3);

//8
function reverseString(str) {
    let reversed = '';
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("JavaScript")); 

//9
function countVowels(str){
    let count=0;
    const vowels='ariouAEIOU';
    for(let i=0; i<str.length;i++){
        if(vowels.includes(str[i])){
            count++;
        }
    }
    console.log("Total number of vowels:" , count);
}
countVowels("Srivigna");

//10
function printMultiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(number + " x " + i + " = " + (number * i));
    }
}
printMultiplicationTable(5);

//11
function filter_odd_numbers(numbers){
    return numbers.filter(num => num % 2 !== 0);
}
input_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
odd_numbers = filter_odd_numbers(input_array)
console.log(odd_numbers);

//12
function countOccurrences(arr) {
    var counts = {};
    for (var i = 0; i < arr.length; i++) {
        var item = arr[i];
        if (counts[item] === undefined) {
            counts[item] = 1;
        } else {
            counts[item] = counts[item] + 1;
        }
    }
    for (var key in counts) {
        console.log(key + ": " + counts[key]);
    }
}
countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']);

//13
function fizzBuzz() {
    for (var i = 1; i <= 50; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz();

//14
function calculate(num1, num2, operator) {
    var result;

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Error: Invalid operator. Please use +, -, *, or /.");
            return;
    }

    console.log("Result:", result);
}
calculate(10, 5, '+'); 
calculate(10, 5, '-'); 
calculate(10, 5, '*'); 
calculate(10, 5, '/'); 

//15
function printPrimes(limit) {
    if (limit <= 2) {
        console.log("No prime numbers less than", limit);
        return;
    }
    for (var num = 2; num < limit; num++) {
        if (isPrime(num)) {
            console.log(num);
        }
    }
}
function isPrime(n) {
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}
printPrimes(50);

//16
function isPalindrome(str) {
    var cleanedStr = str.toLowerCase()
    var reversedStr = cleanedStr.split('').reverse().join('');
    if (cleanedStr === reversedStr) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}
isPalindrome("madam");   
isPalindrome("racecar");         
isPalindrome("hello");            
isPalindrome("A man, a plan, a canal, Panama");

//17
function generateRandomInteger() {
    var randomNum = Math.floor(Math.random() * 100) + 1;
    //Scales the random number to a range between 0 and 100 (exclusive).+1:Adjusts the range to 1 to 100.
    console.log("Generated number:", randomNum);
}
generateRandomInteger();

//18
function sortArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j + 1]
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("Sorted array:", arr);
}
sortArray([64, 34, 25, 12, 22, 11, 90]);

//19
var todoList = [];

// Function to add a task
function addTask(task) {
    todoList.push({ task: task, status: 'incomplete' });
    console.log('Added task: "' + task + '"');
    printTodoList();
}
// Function to remove a task by task name
function removeTask(task) {
    var index = -1;
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].task === task) {
            index = i;
            break;
        }
    }
    if (index !== -1) {
        todoList.splice(index, 1);
        console.log('Removed task: "' + task + '"');
    } else {
        console.log('Task "' + task + '" not found.');
    }

    printTodoList();
}

// Function to toggle the status of a task
function toggleTaskStatus(task) {
    for (var i = 0; i < todoList.length; i++) {
        if (todoList[i].task === task) {
            todoList[i].status = todoList[i].status === 'complete' ? 'incomplete' : 'complete';
            console.log('Toggled status of task: "' + task + '" to "' + todoList[i].status + '"');
            printTodoList();
            return;
        }
    }

    console.log('Task "' + task + '" not found.');
}
function printTodoList() {
    console.log('To-Do List:');
    for (var i = 0; i < todoList.length; i++) {
        console.log((i + 1) + '. ' + todoList[i].task + ' - ' + todoList[i].status);
    }
    console.log('\n');
}
addTask('Buy groceries');
addTask('Clean the house');
addTask('Pay bills');
removeTask('Clean the house');
toggleTaskStatus('Pay bills');
toggleTaskStatus('Buy groceries');

//20
function findMostFrequentElement(arr) {
    var frequency = {}; // Object to store the frequency of each element
    var maxCount = 0;   // To track the maximum frequency
    var mostFrequent;   // To store the most frequent element

    // Loop through the array and count the occurrences of each element
    for (var i = 0; i < arr.length; i++) {
        var element = arr[i];
        if (frequency[element] === undefined) {
            frequency[element] = 1;
        } else {
            frequency[element] += 1;
        }
        // Check if the current element's frequency is the highest
        if (frequency[element] > maxCount) {
            maxCount = frequency[element];
            mostFrequent = element;
        }
    }
    console.log('Most frequent element:', mostFrequent);
    console.log('Frequency:', maxCount);
}
findMostFrequentElement([1, 3, 2, 1, 4, 1, 3, 3, 3]); 
findMostFrequentElement(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']); 
