import { CodeColours, HintColours } from '../constants/constants'

export default class Mastermind {

  secretCode: string[] = null;
  MAX_GUESSES: number = 10;
  guessCount: number = 0;

  constructor(code:string[], private errorFn = (msg) => {}) {
    this.validateInput(code, "Secret code");
    this.initializeStuff(code);
  }

  isColourValid(colour: string): boolean {
    return (Object.values(CodeColours).includes(colour as CodeColours));
  }

  guess(code:string[]): string[] {
    this.validateInput(code, "Guess");

    if (++this.guessCount > this.MAX_GUESSES) {
      this.errorFn("You lose!");
    }
    return [];
  }

  validateInput(code: string[], codeName: string) {
    if (code.length !== 4) {
      this.errorFn(`${codeName} must be 4 colours.`);
    }

    code.forEach(colour => {
      if(!this.isColourValid(colour)) {
        if (codeName === "Guess") {
          
        }
        this.errorFn("Not passing in valid colours");
      }
    });
  }

  initializeStuff(code: string[]) {
    this.guessCount = 0;
    this.secretCode = code;
  }
}