describe("mastermind", () => {
    test("Guessing the correct code returns 'Won'.", () => {
        const game = new Mastermind();
        game.setup(["red", "red", "red", "red"]);

        const result = game.check(["red", "red", "red", "red"]);

        expect(result.won).toEqual(true);
    });

    const testCases = [
        {
            code: ["red", "red", "red", "red"] as color[],
            guess: ["red", "red", "red", "blue"] as color[],
            expected: {
                won: false,
                length: 3,
                blacks: 3,
                whites: 0
            }
        }, {
            code: ["red", "blue", "orange", "green"] as color[],
            guess: ["red", "orange", "purple", "blue"] as color[],
            expected: {
                won: false,
                length: 3,
                blacks: 1,
                whites: 2
            }
        }, {
            code: ["red", "blue", "orange", "green"] as color[],
            guess: ["red", "blue", "blue", "purple"] as color[],
            expected: {
                won: false,
                length: 3,
                blacks: 2,
                whites: 1
            }
        }, {
            code: ["red", "blue", "blue", "green"] as color[],
            guess: ["red", "orange", "blue", "purple"] as color[],
            expected: {
                won: false,
                length: 2,
                blacks: 2,
                whites: 0
            }
        }, {
            code: ["red", "blue", "blue", "green"] as color[],
            guess: ["blue", "orange", "red", "purple"] as color[],
            expected: {
                won: false,
                length: 2,
                blacks: 0,
                whites: 2
            }
        }, {
            code: ["red", "blue", "blue", "green"] as color[],
            guess: ["blue", "green", "red", "blue"] as color[],
            expected: {
                won: false,
                length: 4,
                blacks: 0,
                whites: 4
            }
        }
    ];

    testCases.forEach(({code, guess, expected}) => {
        test("checking the incorrect code with duplicate colours return an array with white and black pieces.", () => {
            const game = new Mastermind();
            game.setup(code);
    
            const result = game.check(guess);
    
            expect(result.won).toEqual(expected.won);
            expect(result.result.length).toEqual(expected.length);
            expect(result.result.filter(i => i === "black").length).toEqual(expected.blacks);
            expect(result.result.filter(i => i === "white").length).toEqual(expected.whites);
        });
    });
});

type color = "red" | "blue" | "green" | "orange" | "purple" | "yellow";
type result = "white" | "black";

class Result {
    public  get won(): boolean {
        return this.result.length === 4 && this.result.indexOf("white") === -1;
    }

    constructor(public result: result[])
    {}
}

class Mastermind {
    private code: Array<color>;

    constructor() {}

    setup(code: color[]) {
        this.code = code;
    }

    check(guess: color[]): Result  {
        let result = guess.map((item, guessIndex) => {
            if (this.code[guessIndex] === item)
                return "black";
            else if (this.code.indexOf(item) >= 0 && this.code.indexOf(item) !== guessIndex)
                return "white";
        });

        result = result
            .filter(Boolean)
            .sort((a,b) => 0.5 - Math.random());

        return new Result(result);
    }
}
