import { isPrime } from "../prime"
import { roundTo5 } from "../round"

type Pair<T, V> = {input: T, expected: V}

function makePair<T, V>(x: T, b: V): Pair<T, V> {
    return { input: x, expected: b}
}

describe("test prime number", () => {

    const pairs: Pair<number, boolean>[] = [
        makePair(1, false),
        makePair(2, true),
        makePair(3, true),
        makePair(4, false),
        makePair(5, true),
        makePair(6, false),
        makePair(7, true),
        makePair(8, false),
        makePair(9, false),
        makePair(10, false)
    ] 

    for(const pair of pairs) {
        it(pair.input.toString(), () => {
            expect(isPrime(pair.input)).toBe(pair.expected)
        })
    }

})


describe("round", () => {
    const pairs: Pair<number, number>[] = [
        makePair(25, 25),
        makePair(27, 25),
        makePair(27.8, 30),
        makePair(41.7, 40),
    ];

    for (const pair of pairs) {
        it(pair.input.toString(), () => expect(roundTo5(pair.input)).toBe(pair.expected))
    }
})