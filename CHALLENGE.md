# Mastermind
The game where one player, the mastermind, has to choose a secret combination of coloured pegs. Then the second player, the codebreaker, tries to guess the code. The mastermind provides feedback to each guess of the codebreaker, indicating the number of well-placed and misplaced colours.

## Rules
1. The Mastermind needs to be set up with a code of 4 colours. The colours are randomly selected from ["red", "blue", "green", "orange", "purple", "yellow"]. Duplicated colours are allowed, but there can only be always exactly 4.
2. The Mastermind will return an array to you. For every correctly positioned colour in the guess, a "black" piece is added to the array. For each correct colour but in the wrong position, a "white" piece is added to the array. If the guessed colour is not on the code, nothing will be added to the array for that given element. Note that the guess also should always have four elements.
3. Passing the correct array will pass the Kata test and return "WON!".
4. Passing an invalid colour will fail the test with the error "Error: you have given an invalid colour!"
5. Passing an invalid array length should fail with the error "Error: you must pass 4 colours!"
6. Guessing more than 10 times should fail with the error "Error: you have had more than 10 tries!"
7. The return array elements should not be in any particular order. The returned array should be shuffled.

## Tasks
Your task is to create a game of mastermind that follows the rules described in the previous section. The game should be initialized with one code to be broken, and there should be a method to check the guesses with.
Pay attention to edge cases and exceptions.
(Extra objective) Now that you have a working game of mastermind, design and implement the code to play and beat the game.
 - You can start by allowing more than 10 tries at first.
 - When you have a working algorithm, try to optimize it so the game is beat in as few guesses as possible.

## Examples
Given the code ["blue", "red", "green", "purple"]
When the codebreaker tries the sequence ["blue", "yellow", "purple", "orange"]
Then returns ["white", "black"]
    - white for the "purple" piece that is on the code but was guessed in the wrong position and black for the "blue" piece that was guessed on the correct position.
    - Note that the order of the resulting array is irrelevant.

Given the code ["blue", "red", "green", "purple"]
When the codebreaker tries the sequence ["yellow", "yellow", "yellow", "yellow"]
Then returns an empty array since no elements match.

Given the code ["blue", "red", "green", "purple"]
When the codebreaker tries the sequence ["green", "yellow", "red", "yellow"]
Then returns ["white", "white"].

Given the code ["blue", "red", "green", "purple"]
When the codebreaker tries the sequence ["yellow", "red", "red", "blue"]
Then returns ["white", "white", "black"].
    - one "black" for the correctly guessed "red."
    - and one "white" for each, the "blue" and "red" on the wrong positions.