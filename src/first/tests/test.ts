import { Product, filterProducts } from "../product"
import { capitalize, countUniqueWords, normalizeSpaces } from "../string_helper"

describe("test Product", () => {
    it("", () => {
        const query = "name-contains-xiaomi&price-<=15000&quantity->5&description-ends-sale"
        const products: Product[] = [
            new Product('xiaomi redmi 11N', 11230, 7, 'new sale'),
            new Product('apple watch', 13000, 14, 'best sale ever'),            // не то название
            new Product('redmi xiaomi 13E', 14000, 6, 'the sale of the year'),  // saled в середине, а не в конце
            new Product('xiaomi 20U', 20400, 10, 'This is the sale'),           // дорого
            new Product('xiaomi 10G', 9999, 1, ':Limited ammoun. Best sale'),   // мало
            new Product('newphone xiaomi plus', 14530, 7, 'on sale'),
        ]

        const expected = [
            products[0],
            products[5],
        ]
        const actual = filterProducts(products, query);
        expect(actual).toEqual(expected)

    })
})


describe("test string helper", () => {
    it("test capitalize", () => {
        expect(capitalize('')).toBe('');
        expect(capitalize('a')).toBe('A');
        expect(capitalize('A')).toBe('A');
        expect(capitalize('abcd')).toBe('Abcd');
        expect(capitalize('Abcd')).toBe('Abcd');
        expect(capitalize('ABCD')).toBe('Abcd');
        expect(capitalize('abcd efg')).toBe('Abcd efg');
        expect(capitalize('ABCD EFG')).toBe('Abcd efg');
        expect(capitalize('1aB23')).toBe('1ab23');
    })

    it('Count unique words', () => {
        const text = 'Текст, в котором слово текст несколько раз встречается и слово тоже';
        const expected = new Map()
            .set('текст', 2)
            .set('в', 1)
            .set('котором', 1)
            .set('слово', 2)
            .set('несколько', 1)
            .set('раз', 1)
            .set('встречается', 1)
            .set('и', 1)
            .set('тоже', 1)

        const actual = countUniqueWords(text);
        expect(actual).toEqual(expected); 
    });

    it("test normalize whitespaces", () => {
        const text     = 'Вот пример строки,в которой     используются знаки препинания.После знаков должны стоять пробелы , а перед знаками их быть не должно .    Если есть лишние подряд идущие пробелы, они должны быть устранены.'
        const expected = 'Вот пример строки, в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.'
        expect(normalizeSpaces(text)).toBe(expected);
    })
})