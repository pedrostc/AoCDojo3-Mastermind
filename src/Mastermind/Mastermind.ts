import { CodeColours, HintColours } from '../constants/constants'

export default class Mastermind {

  secretCode: string[] = null;

  constructor() {
    this.secretCode = [CodeColours.RED, CodeColours.BLUE, CodeColours.GREEN, CodeColours.YELLOW]
  } 
}