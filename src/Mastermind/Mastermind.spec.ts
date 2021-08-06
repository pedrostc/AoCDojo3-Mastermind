import Mastermind from "./mastermind";
import { CodeColours, HintColours } from "../Constants/Constants";

describe("The Mastermind", function() {
  describe("initialization", function() {
    test("should initialize a secret code", function() {
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.BLUE];
      var spyFn = jest.fn();
      var mastermind = new Mastermind(code, spyFn);

      expect(mastermind.secretCode).toEqual(code);
      expect(spyFn).not.toHaveBeenCalled();
    });

    test("should throw an error if the code is not exactly 4 colours", function() {
      var errorMsg = "Secret code must be 4 colours."
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.BLUE, CodeColours.GREEN];
      var spyFn = jest.fn();
      
      var mastermind = new Mastermind(code, spyFn);
          
      expect(spyFn).toHaveBeenCalledWith(errorMsg);
    });

    test("should pass in valid colours", function() {
      var errorMsg = "Not passing in valid colours"
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, "Invalid Colour"];
      var spyFn = jest.fn();
      
      var mastermind = new Mastermind(code, spyFn);

      expect(spyFn).toHaveBeenCalledWith(errorMsg);
    });
  });

  describe("game rules", function() {
    test("should accept a guess", function() {
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.ORANGE];
      var guessColours = [CodeColours.YELLOW, CodeColours.YELLOW, CodeColours.YELLOW, CodeColours.YELLOW];
      var expectedHintLength = 0; // We should only get a hint for each colour actually in the secret code.
      var spyFn = jest.fn();
      
      var mastermind = new Mastermind(code, spyFn);

      var hint = mastermind.guess(guessColours)

      expect(hint.length).toBe(expectedHintLength);
    });

    test("should throw an error if the guess is not exactly 4 colours", function() {
      
      //arrange
      var spyFn = jest.fn();
      var errorMsg = "Guess must be 4 colours."
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.ORANGE];
      var guessColours = [CodeColours.YELLOW];
      
      //act
      var mastermind = new Mastermind(code, spyFn);
      var hint = mastermind.guess(guessColours)
      
      //assert
      expect(spyFn).toHaveBeenCalledWith(errorMsg);

    });

    test("should pass in valid colours for the guess", function() {
      
      //arrange
      var spyFn = jest.fn();
      var errorMsg = "Guess - must only include valid colours";
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.ORANGE];
      var guessColours = [CodeColours.YELLOW, CodeColours.BLUE, CodeColours.BLUE, "Invalid Colour"];
      
      //act
      var mastermind = new Mastermind(code, spyFn);
      var hint = mastermind.guess(guessColours)
      
      //assert
      expect(spyFn).toHaveBeenCalledWith(errorMsg);
    });

    test("a guess should not allow more than 10 guesses", function() {
      var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.ORANGE];
      var guessColours = [CodeColours.YELLOW, CodeColours.YELLOW, CodeColours.YELLOW, CodeColours.YELLOW];
      var expectedHintLength = 0; // We should only get a hint for each colour actually in the secret code.
      var spyFn = jest.fn();
      
      var mastermind = new Mastermind(code, spyFn);
      var errorMsg = "You lose!";

      for (let i=1; i<=11; i++){
        mastermind.guess(guessColours);
      }

      expect(spyFn).toHaveBeenCalledWith(errorMsg);
    });
  })
});

// VALIDATE AGAINST ["red", "blue", "green", "orange", "purple", "yellow"]`
