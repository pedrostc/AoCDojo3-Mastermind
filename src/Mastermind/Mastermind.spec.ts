import Mastermind from "./mastermind";
import { CodeColours, HintColours } from "../Constants/Constants";

describe("The Mastermind", function() {
  test("should initialize a secret code", function() {
    var code = [CodeColours.RED, CodeColours.BLUE, CodeColours.BLUE, CodeColours.BLUE];
    var mastermind = new Mastermind(code);

    expect(mastermind.secretCode).toEqual(code);
  });
});