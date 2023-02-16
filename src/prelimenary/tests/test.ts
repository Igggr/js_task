import { createMultiplicationTable } from "../multipication_table"
import { pluralizer } from "../pluralixer"
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

describe("pluarizer", () => {
    it("", () => {
        expect(pluralizer(1)).toBe("1 компьютер");

        expect(pluralizer(2)).toBe("2 компьютера");
        expect(pluralizer(3)).toBe("3 компьютера");
        expect(pluralizer(4)).toBe("4 компьютера");

        expect(pluralizer(5)).toBe("5 компьютеров");
        expect(pluralizer(6)).toBe("6 компьютеров");
        expect(pluralizer(7)).toBe("7 компьютеров");
        expect(pluralizer(8)).toBe("8 компьютеров");
        expect(pluralizer(9)).toBe("9 компьютеров");

        expect(pluralizer(10)).toBe("10 компьютеров");
        expect(pluralizer(11)).toBe("11 компьютеров");
        expect(pluralizer(12)).toBe("12 компьютеров");
        expect(pluralizer(13)).toBe("13 компьютеров");
        expect(pluralizer(14)).toBe("14 компьютеров");
        expect(pluralizer(15)).toBe("15 компьютеров");
        expect(pluralizer(16)).toBe("16 компьютеров");
        expect(pluralizer(17)).toBe("17 компьютеров");
        expect(pluralizer(18)).toBe("18 компьютеров");
        expect(pluralizer(19)).toBe("19 компьютеров");
        expect(pluralizer(20)).toBe("20 компьютеров");
        
        expect(pluralizer(21)).toBe("21 компьютер");

        expect(pluralizer(22)).toBe("22 компьютера");
        expect(pluralizer(23)).toBe("23 компьютера");
        expect(pluralizer(24)).toBe("24 компьютера");

        expect(pluralizer(25)).toBe("25 компьютеров");
        expect(pluralizer(26)).toBe("26 компьютеров");
        expect(pluralizer(27)).toBe("27 компьютеров");
        expect(pluralizer(28)).toBe("28 компьютеров");
        expect(pluralizer(29)).toBe("29 компьютеров");
        expect(pluralizer(30)).toBe("30 компьютеров");

        expect(pluralizer(31)).toBe("31 компьютер");

        expect(pluralizer(32)).toBe("32 компьютера");
        expect(pluralizer(33)).toBe("33 компьютера");
        expect(pluralizer(34)).toBe("34 компьютера");

        expect(pluralizer(35)).toBe("35 компьютеров");
        expect(pluralizer(36)).toBe("36 компьютеров");
        expect(pluralizer(37)).toBe("37 компьютеров");
        expect(pluralizer(38)).toBe("38 компьютеров");
        expect(pluralizer(39)).toBe("39 компьютеров");
        expect(pluralizer(40)).toBe("40 компьютеров");

        expect(pluralizer(41)).toBe("41 компьютер");

        expect(pluralizer(110)).toBe("110 компьютеров");
        expect(pluralizer(111)).toBe("111 компьютеров");
        expect(pluralizer(112)).toBe("112 компьютеров");
        expect(pluralizer(113)).toBe("113 компьютеров");
        expect(pluralizer(114)).toBe("114 компьютеров");
        expect(pluralizer(115)).toBe("115 компьютеров");
        expect(pluralizer(116)).toBe("116 компьютеров");
        expect(pluralizer(117)).toBe("117 компьютеров");
        expect(pluralizer(118)).toBe("118 компьютеров");
        expect(pluralizer(119)).toBe("119 компьютеров");
        expect(pluralizer(120)).toBe("120 компьютеров");
    })
})