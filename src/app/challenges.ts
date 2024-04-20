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
        =================================================================================================
        Note:
        Constraints:
        The input string may cotain alphabetic characters, digits, spaces and punctuation.
        The input string is non-empty
        The input string may contain multiple words separated by spaces
        =================================================================================================
        Note:
        If the input string is empty or contains only whitespace the function should return an false.
        The function should ignore leading and trailing whitespace.
        =================================================================================================
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
        =================================================================================================
        Note:
        The hash tag should be constructed as follows:
        
        1. The input string should be converted to a hash tag format, where each word is capitalized and concatented together without spaces.
        2. If the length of the input string is greater than 280 characters or if the input string is empty or contains only whitespace, the function should return false.
        3. Otherwise, the function should return the generated hash tag prefixed with #.
        =================================================================================================
        Note:
        Example:
        generateHash('Hello World') should return '#HelloWorld'`,
        placeholder : `function generateHash(str) {
            // Your code here
            return hashTagWord;
          }
          generateHash('Hello World') // #HelloWorld`,
        difficulty: 'easy'
    },
]