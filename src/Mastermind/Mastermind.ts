import { CodeColours, HintColours } from '../Constants/Constants'

export default class Mastermind {

  SecretCode: string[] = null;

  constructor() {
    this.SecretCode = [CodeColours.RED, CodeColours.BLUE, CodeColours.GREEN, CodeColours.YELLOW]
  } 
}