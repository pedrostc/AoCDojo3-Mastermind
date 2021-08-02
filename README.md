# Art of Code Dojo 3 - Mastermind

On this session we'll build a game of Mastermind with TypeScript and micro-pairing.

## Table of contents
- [Coding Challenge - Mastermind](CHALLENGE.md)
- [Getting started with this repository](#getting-started-with-this-repository)
  - [Description](#description)
  - [Rules](#rules)
  - [Challenge Tasks](#challenge-tasks)
- [How to pair program remotely](#how-to-pair-program-remotely)
- [TDD Basics](#tdd-basics)
  - [Red-Green-Refactor](#red-green-refactor)
  - [Cycle steps as design opportunities](#cycle-steps-as-design-opportunities)
  - [TDD side effects](#tdd-side-effects)
- [Micro-Pairing](#micro---pairing)
- [JavaScript Testing](#javascript-testing)
  - [Writing tests](#writing-tests)
  - [Asserting](#asserting)
    + [Errors](#errors)
  - [Filenames](#filenames)

## Getting started with this repository
You'll need [Node.Js](https://nodejs.org/) installed to be able to utilize this repository.

After cloning, run `npm install` on the root of this repository to install all necessary dependencies.

To run tests, you can use the `npm run test` command. If you want to enable file watch, so the tests re-run automatically after saving a file, you can use the `npm run test:watch` command.

The test framework is configured to look for files inside of the `src` folder and to look for test files with the `.spec.js` extension.

## How to pair program remotely
There are a couple of ways we can share the Pilot/Co-pilot seat remotely.

### Visual studio code Live Share
If both participants have [VS Code](https://code.visualstudio.com/Download), one of the participants can start a [liveshare](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare-pack) session. [More informatiom](https://code.visualstudio.com/learn/collaboration/live-share).

### Teams screenshare control
On a teams call you can share your screen with the other participants and they can ask to control your computer. For more information [check here](https://support.microsoft.com/en-us/office/share-content-in-a-meeting-in-teams-fcc2bf59-aecd-4481-8f99-ce55dd836ce8?ui=en-us&rs=en-us&ad=us)

## TDD Basics
Test-Driven Development (TDD) is a software development methodology where you write a test first and then write the code to make the test pass. The tests should reflect one of the requirements or parts of it.  It works on a cycle where first we write tests that express what your system should do; then you write your code to make it meet the expectations expressed in the test, and then refactor your code to enhance its design. This cycle is also known as the Red-Green-Refactor cycle.

### Red-Green-Refactor
- Red - We write a test that reflects the requirement, or part of it, that we will work on. The test will describe a behaviour that does not exist on the code if there's any code written whatsoever so that the test will fail.
- Green - We write the minimal amount of code required to make the test pass. This code can be as dirty as required. We're not focusing on quality or clean code at this point. We just want to make the test pass as fast as possible.
- Refactor - After we have a passing test, we will focus on organizing and cleaning the code up. Here we're thinking about the design and quality of our implementation, so take your time.

### Cycle steps as design opportunities
During the TDD cycle, we have separate opportunities to think about different aspects of the design of the code we're writing. Here's one way of thinking about these.
- On the Red step, we will make decisions about the API design: what its contract looks like and what to expect.
- On the Green stage, we define the bare minimum that we need to deliver the requirement specified by the test.
- On the Refactor step, we can focus on the design of the solution, organizing the code better, removing duplications and applying patterns.

### How to start - Zero, One, Many
Normaly it can be a bit dificult to figure how to start testing, one way of dealing with that is by using the Zero-One-Many approach.
- Zero: What's the behaviour when my input is nothing. This is a good place to start and gives the opportunity to think about the contract of our API.
- One: What's the behaviour when I provide one input to my API?
- Many: When I have list on inputs, how does my API behave?

### TDD side effects
This approach to development has some side effects:
- You have a faster feedback cycle to work with. The automated tests should fast so you can have near-immediate feedback on the impact of your code changes.
- It separates the concerns (steps) of the development process by having different moments to think about meeting requirements and good design at different moments.
- It gives developers a safe net of automated tests, which facilitates refactoring the code throughout its lifespan.
- Tests can be a good way to document the intended behaviour of the code.

## Micro-Pairing
Very similar to the Ping Pong, but in this case the participants switch places on every step of the TDD cycle. In this mode, after one of the participants made the test pass the other one may choose to refactor or to write another test, in such a way that the refactor step is made in bulk in a later step.

A Writes a test and sees it failing
B Writes the code needed to make the test pass
A Writes another failing test
B Writes the code needed to make the test pass
A Refactors the code
B Writes a failing test
A Writes the code needed to make the test pass
...

## TypeScript Testing
In this repository, we're using [Jest](https://jestjs.io/en/) as our test framework.

### Writing tests
To write a test, you should use the `test` function. It takes a string as its first argument and a function as the second. The string is the test description, and the function is the test code:
```ts
test('should receive a CSV string', function() { /* Test code here */ });
```

You can use the `describe` function to group your tests. It has the same signature as the `test` function, receiving a string and a function as arguments. You should add your tests to the body of the second argument:
```ts
describe('add', function() {
    test('should receive a csv string', function() { /* Test code here */ });
    test('should sum all comma separated elements in the string', function() { /* Test code here */ });
});
```
#### Re-using the same test for multiple test cases
You can use dynamic test to simplify your code.
```ts
var testCases = [
    { input: "input1", expected: "output1" },
    { input: "input2", expected: "output2" }
];

testCases.forEach(function({input, expected}) {
    test(`should output ${expected} for input ${input}.`, function() {
        const actual = methodUnderTest(input);

        expect(actual).toEqual(expected);
    });
});
```

### Asserting
For assertation this repo follows the convention of using the [expect](https://jestjs.io/docs/en/expect) notation for the tests assertations.
```ts
expect(value).toBeTruthy()
expect(value).toEqual(true);
expect(value).not.toEqual(false);
expect(value).not.toBeFalsy(false);
```

#### Errors
There are two styles to assert errors: one uses a try/catch block and asserts on the error object in the catch block. The second uses the [toThrow](https://jestjs.io/docs/en/expect#tothrowerror) method of the `expect` object. For this second method you need to wrap your code in a function for it to work.
```ts
// Using a try/catch block
test('should throw an error', function() {
    try {
        brokenFunction();
    } catch(error) {
        expect(error.message).toEqual('I am an error message');
    }
});
```

```ts
// Using the expect.toThrow method
test('should throw an error', function() {
    var wrapperFunction = function() {
        borkenFunction();
    }

    expect(wrapperFunction.toThrow();
    // or, if you want to be more specific
    expect(wrapperFunction).toThrow(new Error('I am an error message'));
});
```

### Filenames
This repository is using the following convention for test file names: `<name>.spec.ts`.
If you use the `.spec.ts` extension for your file, the test runner will pick it up automatically and execute all available tests.