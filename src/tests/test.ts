import { createMultiplicationTable } from "../multipication_table"
import { isPrime } from "../prime"
import { roundTo5 } from "../round"
import { twoTimesInBoth } from "../two_times_in_both"

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
        it(pair.input.toString(), () => {
            const rounded = roundTo5(pair.input)
            expect(rounded).toBe(pair.expected);
        })
    }
})


describe("two times in both", () => {
    const arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23]
    const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
    const expected = [1, 17]
    expect(twoTimesInBoth(arr1, arr2)).toEqual(expected)

    const arr3 = [7, 17, 1, 2, 2, 9, 1, 17, 56, 56, 23]
    const arr4 = [56, 17, 17, 1, 23, 2, 34, 2, 23, 1, 8, 1];
    const expected1 = [1, 2, 17]
    expect(twoTimesInBoth(arr3, arr4)).toEqual(expected1)
})


describe("multiplication test", () => {
    it("5", () => {
        const expected = [
            ['',  '1', '2',  '3',  '4',   '5'],
            ['1', '1', '2',  '3',  '4',   '5'],
            ['2', '2', '4',  '6',  '8',   '10'],
            ['3', '3', '6',  '9',  '12',  '15'],
            ['4', '4', '8',  '12', '16',  '20'],
            ['5', '5', '10', '15', '20',  '25'],
        ]
        expect(createMultiplicationTable(5)).toEqual(expected)
    })
    it("3", () => {
        const expected = [
            ['',  '1', '2',  '3'],
            ['1', '1', '2',  '3'],
            ['2', '2', '4',  '6'],
            ['3', '3', '6',  '9'],
        ]
        expect(createMultiplicationTable(3)).toEqual(expected)
    })
})