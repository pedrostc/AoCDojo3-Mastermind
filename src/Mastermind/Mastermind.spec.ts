import Mastermind from "./Mastermind";

describe("The Mastermind", function() {
  test("should initialize a secret code", function() {
    var mastermind = new Mastermind();

    expect(mastermind.SecretCode).not.toBe(null);
  });
});