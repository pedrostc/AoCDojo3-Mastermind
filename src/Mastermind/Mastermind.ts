import { CodeColours, HintColours } from '../constants/constants'

export default class Mastermind {

  SecretCode: string[] = null;

  constructor() {
    this.SecretCode = [CodeColours.RED, CodeColours.BLUE, CodeColours.GREEN, CodeColours.YELLOW]
  } 
}