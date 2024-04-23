type  Challenge = {
    id: number;
    title: string;
    description: string;
    placeholder: string;
    difficulty: string;
}
export const challenges:Challenge[] = [
    {
        id: 1,
        title: 'Day 1 : Find Longest Word in a String',
        description : `Q. Write a function findLongestWord that takes a string as input and returns the longest word in the string. If there are multiple longest words, return the first one encountered.
        ===========================================================
        Note:
        Constraints:
        The input string may cotain alphabetic characters, digits, spaces and punctuation.
        The input string is non-empty
        The input string may contain multiple words separated by spaces
        ===========================================================
        Note:
        If the input string is empty or contains only whitespace the function should return an false.
        The function should ignore leading and trailing whitespace.
        ===========================================================
        Example: 
        findLongestWord('The quick brown fox jumped over the lazy dog') should return 'jumped'
        `,
        placeholder : `function findLongestWord(str) {
            // Your code here
        }
        findLongestWord('The quick brown fox jumped over the lazy dog')
        `,
        difficulty: 'easy'
    },
    {
        id: 2,
        title: 'Day 2 : Generate Hash Tag from a String',
        description : `Q. You are required to implement a function generateHash that generates  hash tag from a given string.
        ===========================================================
        Note:
        The hash tag should be constructed as follows:
        
        1. The input string should be converted to a hash tag format, where each word is capitalized and concatented together without spaces.
        2. If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
        3. Otherwise, the function should return the generated hash tag prefixed with #.
        ===========================================================
        Note:
        Example:
        generateHash('Hello World') should return '#HelloWorld'`,
        placeholder : `function generateHash(str) {
            // Your code here
            return hashTagWord;
          }
          generateHash('Hello World')`,
        difficulty: 'easy'
    },
    {
        id : 3,
        title : 'Day 3 : Count the Characters in a String',
        description : `Q.  Write a function called countChar that takes two parameters: a string and a character to count. The function should return the number of items the specified character appears in the string.
        ===========================================================
        Constraints:
        1. The function should be case-sensitive.
        2. The function should handle both lowercase and uppercase characters.
        3. The character parameter can be any printable ASCII character (the function should accept any character that is part of ASCII character set and is printable).`,
        placeholder : `function countChar(str, char){
            // Your code here
        }
        countChar('Hello World', 'o')`,
        difficulty: 'easy'
    },
    {
        id : 4,
        title : 'Day 4 : Check Triangle Type',
        description : `Q. Write a function called checkTriangleType that takes three parameters representing the lengths of the sides of a triangle. The function should return a string indicating the type of triangle: "equilateral", "isosceles", or "scalene"
        ===========================================================
        console.log(checkTriangle(3,3,3)); //Output: equilateral
        console.log(checkTriangle(3,4,3)); //Output: isosceles
        console.log(checkTriangle(5,8,6)); //Output: scalene
        ===========================================================
        Constraints:
        1. If all three sides are of equal length, return "equilateral".
        2. If only two sides are of equal length, return "isosceles";
        3. If all three sides are of different lengths, return "scalene"`,
        placeholder : `function checkTriangleType(a,b,c,){
            // Your code here
        }
        checkTriangleType(3,3,3)`,
        difficulty: 'easy'
    },
    {
        id : 5,
        title : 'Day 5 : Sort an Array of Numbers in Ascending Order',
        description : `Q. Write a function to sort an array of numbers in an ascending order.
        ===========================================================
        console.log(sortAscending([5,3,10,8])) //Output: [3,5,8,10]
        console.log(typeof sortAscending[2]);
        ===========================================================
        Constraints:
        1. The function should take an array of numbers as input.
        2. It should return a new array with the numbers sorted in ascending order.
        3. The original array should remain unchanged.
        4. You are not allowed to use the build-in sort() method.`,
        placeholder : `function sortAscending(arr){
            // Your code here
        }
        sortAscending([5,3,10,8])`,
        difficulty: 'easy'
    },
    {
        id : 6,
        title : 'Day 6 : Determine Palindrome String',
        description : `Q. Write a function to determine whether a given string is a palindrome or not. A palindrome is a word, phrase, number, or other sequence of characters that reads the same forward and backward, ignoring spaces, punctuation and capitalization.
        ===========================================================
        console.log(isPalindrome("A man, a plan, a canal, Panama")) // True
        console.log(isPalindrome("racecar")) //True
        console.log(isPalindrome("hello")) //False
        ===========================================================
        Constraints:
        1. The input string may contain letters, digits, spaces, punctuation, and special characters.
        2. The function shoule be case-insensitive, meaning "Racecar" and "racecar" should be considered the same.
        3. Ignore spaces, punctuation, and special characters when determining if a string is a palindrome.
        4. The function should return true if the input string is a palindrome and false otherwise.`,
        placeholder : `function isPalindrome(str) {
            // Your code here
          }
          isPalindrome(carrace);`,
        difficulty: 'easy'
    },
    {
        id : 7,
        title : 'Day 7 : Find the Maximum Number in an Array of Numbers',
        description : `Q. Write a function findMax that takes an array of numbers as input and returns the maximum number in the array.
        ===========================================================
        Example:
        console.log(findMax([1,5,3,9,2])); Output: 9
        console.log(findMax([-10,-5,-3,-9,-2])); Output: -2
        console.log(findMax([5])); Output: 5`,
        placeholder : `function findMax(arr){
            // Your code here
        }
        findMax([1,5,3,9,2])`,
        difficulty: 'easy'
    },
    {
        id : 8,
        title : 'Day 8 : Find the Facotorial of a Number using Recursion',
        description : `Challenge: Factorial Finder
        ===========================================================
        Write a function factorial that takes a non-negative integer num as input and returns its factorial. The factorial of a non-negative integer n, denoted as n!, is the product of all positive integers less than or equal to n. The factorial of 0 is defined as 1.
        Here are some examples of factorial calculations:
        ===========================================================
        factorial(0) => 1
        factorial(1) => 1
        factorial(2) => 2
        factorial(3) => 6
        factorial(4) => 24
        factorial(5) => 120
        ===========================================================
        Your function should work for any non-negative integer input
        ===========================================================
        Example: 
        console.log(factorial(5));  Output: 120
        console.log(factorial(0));  Output: 1
        console.log(factorial(3));  Output: 6
        ===========================================================
        Show it with recursive function`,
        placeholder : `function factorial(n){
            // Your code here
        }
        factorial(5)`,
        difficulty: 'medium'
    },
    {
        id : 9,
        title : 'Day 9 : Calculate the Average',
        description : `Calculate the Average
        ===========================================================
        Write a function called calculateAverage that takes an array of numbers as input and returns the average of those numbers.
        ===========================================================
        Your function should:
        1. Accept an array of numbers as input.
        2. Calculate the sum of all the numbers in the array.
        3. Divide the sum by the total number of elements in the array to find the array.
        4. Return the calculated average.
        ===========================================================
        Example: 
         console.log(calculateAverage([5,10,2,8])) Output: 6.25
         ===========================================================
         Note: Ensure the function handles arrays of any length. The average should be returned as a floating-point number.`,
        placeholder : `function calculateAverage(arr){
            // Your code here
        }
        calculateAverage([5,10,2,8])`,
        difficulty: 'medium'
    },
    {
        id : 10,
        title : 'Day 10 : Compare Two Arrays for Equality',
        description : `Q. Write a function arraysAreEqual that take two arrays arr1 and arr2 as input and returns true if the arrays are equal. (i.e. contain the same elements in the same order), and false otherwise.
        ===========================================================
        // Example usage:
        console.log(arraysAreEqual([1,2,3],[1,2,3]))  Output : true
        console.log(arraysAreEqual([1,2,3],[1,2,4]))  Output : false
        console.log(arraysAreEqual([],[]))  Output : true
        ===========================================================
        Note: 
        1. The function should return false if the arrays have different lengths.
        2. The function should compare each element of arr1 with the corresponding elememnt in arr2.
        3. The function should return true only if all elements in arr1 are equal to their corresponding elements in arr2.
        `,
        placeholder : `function arraysAreEqual(arr1, arr2){
            // Your code here
        }
        arraysAreEqual([1,2,3], [1,2,3])`,
        difficulty: 'easy'
    },
    {
        id : 11,
        title : 'Day 11 : Sum of Digits in a Number',
        description : `Q. Write a function that takes a number as input and returns the sum of its digits.
        ===========================================================
        //Example usage:
        console.log(sumOfDigits(1234)) Output: 10
        console.log(sumOfDigits(4321)) Output: 10
        console.log(sumOfDigits(123456)) Output: 21
        ===========================================================
        Constraints: 
        1. The input number will always be a positive integer.
        2. The input can have multiple digits.
        3. The output should be thes um of all the digits in the input number.
        ===========================================================
        Homework: 
        1. This function calculates the sum of digits without converting the number to  a string.
        `,
        placeholder : `function sumOfDigits(num){
            // Your code here
        }
        sumOfDigits(1234)`,
        difficulty: 'easy'
    },
    {
        id : 12,
        title : 'Day 12 : Remove Duplicates from an Array of Integers',
        description : `Q. Write a function that takes an array of integers as input and removes any duplicate elements, returning a new array with only the unique elements.
        ===========================================================
        Example: 
        console.log(removeDuplicates([1,2,3,2,1,4])) //Output: [1,2,3,4]
        console.log(removeDuplicates([5,6,7,7,8,8,9])) //Output: [5,6,7,8,9]
        console.log(removeDuplicates([1,2,3,4])) //Output: [1,2,3,4]
        console.log(removeDuplicates([])) //Output: []
        ===========================================================
        The new Set()method in JavaScript creates a new Set object. A Set object is a collection of unique values. It can store any type of value, whether primitive values or object references.
        ===========================================================
        Constraints:
        1. The input array may contain both positive and negative integers.
        2. The input array may be empty.
        3. The elements at the input array are not guaranteed to be sorted.
        4. The output array should retain the original order of elements from the input array.
        `,
        placeholder : `function removeDuplicates(arr){
            // Your code here
        }
        removeDuplicates([1,2,3,2,1,4])`,
        difficulty: 'medium'
    },
    {
        id : 13,
        title : 'Day 13 : Count the Number of Vowels in a String',
        description : `Q. Write a function that takes a string as input and returns the count of vowels in that string. Consider 'a','e','i','0','u' as vowels (both lowercase and uppercase)
        ===========================================================
        Example: 
        console.log(countVowels("Helloo world")) Output: 4
        console.log(countVowels("ThE quIck brOwn fOx")) Output: 5
        console.log(countVowels("qwe")) Output: 0
        ===========================================================
        Constraints: 
        1. The input string may contain letters in both uppercase and lowercase.
        2. The output should be a non-negative integer representing the count of vowels in the input string.
        `,
        placeholder : `function countVowels(str){
            // Your code here
        }
        countVowels("Helloo world")`,
        difficulty: 'medium'
    },
    {
        id : 14,
        title : 'Day 14 : Determine if a Number is Power of Two',
        description : `Q. Write a function called isPowerOfTwo that takes an integer num as input and returns true if num is a power of two and false otherwise.
        Example usage: 
        console.log(isPowerOfTwo(8)) Output: true
        console.log(isPowerOfTwo(7)) Output: false
        ===========================================================
        Notes:
        1. The input will be a positive integer.
        2. Zero(0) and negative integers are not considered power of two.
        3. The function should return true if the given number is a power of 2, and false otherwise.
        ===========================================================
        We can solve it using bitwise operator to but it your choice to do it and let me know in the comment section.`,
        placeholder : `function isPowerOfTwo(num){
            // Your code here
        }
        isPowerOfTwo(8)`,
        difficulty: 'hard'
    },
    {
        id : 15,
        title : 'Day 15 : Sum of squares of all elements in an array',
        description : `Q.Write a function to calculate the sum of squares of all elements in an array.
        ===========================================================
        For example, given the array [1,2,3] the function should return 14.
        1*1 + 2*2 + 3*3 = 1 + 4 + 9 = 14
        console.log(sumOfSquares([1,2,3])) Output: 14`,
        placeholder : `function sumOfSquares(arr){
            // Your code here
        }
        sumOfSquares([1,2,3])`,
        difficulty: 'easy'
    },
    {
        id : 16,
        title : 'Day 16 : Find the Minimum Value in an Array of Numbers',
        description : `Q. Write a function that takes an array of numbers as input and returns the minimum value found in the array.
        ===========================================================
        Constraints: 
        1. The input array may contain both positive and negative integers.
        2. The input array may be empty.
        3. The input array may contain duplicate values.
        ===========================================================
        console.log(findMin([5,10,2,8])) Output: 2
        console.log(findMin([5,-3,0,12,-7])) Output: -7
        console.log(findMin([])) Output: undefined (or any suitable message for empty array)
        ===========================================================
        Note: 
        1. Ensure the function handle edge cases gracefully, such as an empty input array.
        2. Consider using ES6 features like the spread syntax (...) for a concise implementation.
        ===========================================================
        The spread syntax ( ...) in JavaScript is used to expand an array into individual elements. In this function, ...arr is used to spread the elements of the input array arr.
        For example: if arr is [5,10,2,8] then ...arr expands to 5.10,2,8.`,
        placeholder : `
        function findMin(arr){
            // Your code here
        }
        findMin([5,10,2,8])`,
        difficulty: 'medium'
    },
    {
        id : 17,
        title : 'Day 17 : Convert a String to CamelCase & snake_case',
        description : `Q. Write a function that convert a string to camelCase & snake_case.
        ===========================================================
        console.log(toCamelCase("hello world thapa")) //Output: helloWorldThapa
        console.log(toSnakeCase("hello World")); //Output: hello_world`,
        placeholder : `function toCamelCase(str) {
            // Your code here
          }
          
          function toSnakeCase(str) {
            // Your code here
          }
          toCamelCase("hello world thapa");
            toSnakeCase("hello World");
          `,
        difficulty: 'hard'
    },
    {
        id : 18,
        title : 'Day 18 : Check if a Character is Uppercase',
        description : `Q. Write a function to check if a character if uppercase or lowercase.
        ===========================================================
        Constraints:
        1. The input char will be a single character.
        2. The character can be any printable ASCII character.
        3. You can assume that the input will always be a string of length 1.
        ===========================================================
        Example:
        console.log(isUpperCase("s")) // True
        console.log(isUpperCase("b")) // False
        ===========================================================
        Note:
        Ensure that the function correctly identifies uppercase characters based on their ASCII values.
        Optimize the function to handle edge cases efficiently.`,
        placeholder : `function isUpperCase(char){
            // Your code here

        }
        isUpperCase("s")`,
        difficulty: 'easy'
    },
    {
        id : 19,
        title : 'Day 19 : Check a String Starting Substring',
        description : ` Q. Write a function to check if a given string starts with a specific substring.
        ===========================================================
        str : A string(e.g : Hello World);
        subStr :  A substring to check if it starts the given string(eg: Hello);
        Output : true if the given string starts with the specified substring, otherwise false.
        ===========================================================
        Example : 
        console.log(startsWith("Hello world","hello"))  Output : True
        console.log(startsWith("Hello world","World"))  Output : True`,
        placeholder : `function startsWith(str, subStr) {
            // Your code here
          }
          startsWith("Hello world","hello")`,
        difficulty: 'medium'
    },
    {
        id : 20,
        title : 'Day 20 : Reverse a String',
        description : `Q. Write a function to reverse a string without using any build-in methods or libraries. The function should take a string and return the reversed string.
        ===========================================================
        Example: 
        console.log(reverseString("hello")) OUTPUT : olleh `,
        placeholder : `function reverseString(str){
            // Your code here
        }
        reverseString("hello")`,
        difficulty: 'medium'
    },
    {
        id : 21,
        title : 'Day 21 : Calculate Mean',
        description : `Q. Write a function called calculateMean that takes an array of numbres as input and returns the mean (average) of those numbers.
        todo In math, the mean is the average of a set of numbers, or the numeric value that represents the center of collection of numbres.
        ===========================================================
        Constraints:
        1. The input array may contain positive and negative integers.
        2. The input array may be empty. If it is empty, the function should return 0.
        ===========================================================
        console.log(calculateMean([1,2,3,4,5])) //Output: 3
        console.log(calculateMean([10,20,30])) //Output: 20
        console.log(calculateMean([-1,0,1])) //Output: 0
        console.log(calculateMean([])) //Output: 0`,
        placeholder : `function calculateMean(arr){
            // Your code here
        }
        calculateMean([1,2,3,4,5])`,
        difficulty: 'easy'
    },
    {
        id : 22,
        title : 'Day 22  : Calculate Median',
        description : `Q. Write a JavaScript function findMedian(arr) that takes an array of numbers as input and returns the media value. If the arrray has an even number of elementes,return the average of the two middle values.
        ===========================================================
        For example: the median of 3,3,5,9,15 is 5. If there is an even number of observations, then there is no single middle value; the median is then usually defined to be the mean of the two middle values: so the median of 3,5,7,9 is (5-7)/2 = 6.
        ===========================================================
        todo Tips:
        1.Sort the array in ascending order.
        2. If the array has an odd number of elements, the median is the middle element.
        3. If the array has an even number of elements, the median is the average of the two middle elements.
        ===========================================================
        console.log(findMedian([3,3,5,9,15])) //Output: 5
        console.log(findMedian([3,5,7,9])) //Output: 6
        console.log(findMedian([1,2,3,4,5])) //Output: 3`,
        placeholder : `function findMedian(arr) {
            // Your code here
          }
          findMedian([3,3,5,9,15])`,
        difficulty: 'medium'
    },
    {
        id : 23,
        title : 'Day 23 : Count Occurences of Each element',
        description : `Q. Write a JavaScript function to count the occurence of each element in an array and store the counts in an object. The keys of te object represent the elements of the array, and the values should represent the number of times each element appears in the array.
        ===========================================================
        TODO:
        1. Accept an array of numbers as an input.
        2. Create an empty object called counts to store the counts of each element.
        3. Iterate through each number in the array.
        5. For each number, increment the count in the counts object.
        6. If the count for a number doesnot exist yet, initlialize it to 1.
        7. Return the counts object containing the counts of each element.
        ===========================================================
        INPUT:
        const numbers = [1,2,2,3,1,4,2];
        OUTPUT:
        {'1':2,'2':3,'3':1,'4':1 }
        ===========================================================
        CONSTRAINTS:
        1. The input array may contain positive integers only.
        2. You can assume that the input array isnot empty.`,
        placeholder : `function countOccurrences(arr){
            // Your code here
        }
        countOccurrences([1,2,2,3,1,4,2])`,
        difficulty: 'medium'
    },
    {
        id : 24,
        title : 'Day 24 : Find Mode in an Array',
        description : `Q. Write a function called findMode that takes an array of numbers as input and returns the mode of the array (the number that appears most frequently)./
        ===========================================================
        console.log(findMode([1,2,2,3,1,4,2])) ;OUTPUT : 2
        ===========================================================
        CONSTRAINTS:
        1.  The input array will always contain at least one element.
        2. The mode will always be unique (i.e. there won't be multiple numbers with the same highest.)`,
        placeholder : `function findMode(arr) {
            // Your code here
          }
          findMode([1,2,2,3,1,4,2])`,
        difficulty: 'medium'
    },
    {
        id : 25,
        title : 'Day 25 : Find Factorial of a Number',
        description : `Q. Write a function to calculate the facotrial of a number(using recursion)
        ===========================================================
        Recursion: 
        Recursion is a programming technique where a function calls itself in order to solve a problem. In essence, it's a function that calls itself with smaller or simpler input untuil it reachers a base case.
        ===========================================================
        Base Case:
        The base case is the condition in a recursion function that stops the recursion. It's the point at which the function stops calling itself and returns a value without further recursion. Without a base case, the recursive function wou.d continue calling itself indefinitely, leading to what's known as infinite recursion.
        ===========================================================
        Recursion Case:
        The recursion case is the condition in a recursive function that determines when the function should call itself should call itself again. It's typically an expression or condition that evaluates to true for certain inputs, indicating that further recursion is necessary to solve the problem. Each recursive call should move closer to the base case, eventually leading to termination of the recursion.
        ===========================================================
        console.log(factorial(5)) OUTPUT: 120`,
        placeholder : `function factorial(num) {
            // Your code here
          }
          factorial(5)`,
        difficulty: 'medium'
    },
    {
        id : 26,
        title : 'Day 26 : Find the nth Fibonacci Number',
        description : `Q. Write a function to find the nth Fibonacci number.
        ===========================================================
        The fibonacci series is a sequence of numbers in which each number (fibonacci number) is the sum of the two preceding ones. It starts with 0 and 1, and the subsequent numbers are calculated by adding the last two numbers. So, the fibonacci series looks like this: 0,1,2,3,5,8,13,21,...
        ===========================================================
        todo: The Fibonacci number is calculated using the following formula:
        todo syntax: f(n) = f(n-1)+f(n-2) where f(1) = f(2) = 1
        ===========================================================
        console.log(fibonacci(0)); OUTPUT: 0
        console.log(fibonacci(1)); OUTPUT: 1
        console.log(fibonacci(2)); OUTPUT: 1
        console.log(fibonacci(3)); OUTPUT: 2
        console.log(fibonacci(4)); OUTPUT: 3
        console.log(fibonacci(5)); OUTPUT: 5`,
        placeholder : `function fibonacci(num){
            // Your code here
        }
        fibonacci(5)`,
        difficulty: 'medium'
    },
    {
        id : 27,
        title : "Repeat the String",
        description : ` Q. Write a function called repeatString that takes two parameters.
        str : A string that needs to be repeated.
        num : An integer representing the number of tiems the string should be repeated.
        The function should repeat the string str the specified number of tiems num adn return the resulting string.
        ===========================================================
        Example: 
        console.log(repeatString("abc",5)) //OUTPUT: "abcabcabcabcabc";
        ===========================================================
        Constraints: 
        1. The input string str will contain only alphanumeric characters and punctuation marks.
        2. The input number num will be a non negative integer.
        3. The output string length should not exceed the length of str multiplied by num.`,
        placeholder : `function repeatString(str, num){
            // Your code here
        }
        repeatString("abc",5)`,
        difficulty: 'medium'
    },
    {
        id : 28,
        title : 'Day 28 : Truncate the String',
        description : `  Q.  Coding Challenge ; Truncate a String
        ===========================================================
        Write a function called truncateString that takes two parameters:
        str : A string that needs to be truncated.
        maxLength : An integer representing the maximum length of the string allowed.
        The function should truncate the input string str if its length exceeds the specified maxLength. If truncation occurs, the function should add '...' to the end of the trucated string.
        ===========================================================
        EXAMPLE:
        console.log(truncateString("A-tisket a-tasket A green and yellow basket",8));
        OUTPUT:
        "A-tisket..."
        ===========================================================
        Constraints:
        1.The input string str will contain only alphanumeric characters and punctuation marks.
        2. The maximum length maxLength will be a positive integer.
        3. The output string length should exceed maxLength + 3 characters due to the addition of '...'.
        4. If space lies at the end after truncation, then it must have to remove that space.`,
        placeholder : `function truncateString(str, maxLength){
            // Your code here
        }
        truncateString("A-tisket a-tasket A green and yellow basket",8)`,
        difficulty: 'medium'
    }
]