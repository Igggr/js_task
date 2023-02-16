export class Product {
    public name: string;
    public price: number;
    public quantity: number;
    public description: string;

    constructor(name: string, price: number, quantity: number, description: string) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.description = description;
    }
}

export function filterProducts(products: Product[], queries: string): Product[] {
    const conditions = queries
        .split('&')
        .map((query) => Condition.create<Product, keyof Product>(query));

    console.log(conditions);

    products.filter((product) => {
        return conditions.every((condition) => condition.check(product));
    })
    return products;
}

type Comparison<T> = (t1: T, t2: T) => boolean

type NumberComparison = '<' | '=' | '>' | '<=' | '>=';
type string = 'contains' | 'starts' | 'ends';

class Condition<P, Key extends keyof P> {
    private readonly property: Key;
    private readonly comparison: Comparison<P[Key]>;
    private readonly value: P[Key];

    private constructor(property: Key, comparison: Comparison<P[Key]>, value: P[Key]) {
        this.property = property;
        this.comparison = comparison;
        this.value = value;
    }

    check(product: P): boolean {
        const productValue = product[this.property];
        return this.comparison(this.value, productValue)
    }

    public static create<Type, K extends keyof Type>(query: string): Condition<Type, K> {
        const [prop, ...how] = query.split('-')
        if (prop !== undefined && how.length === 2) { // string comparison
            const [comparisonSymbol, value] = how;
            new Condition(prop, Condition.stringComparison(comparisonSymbol), value)

        } else if (how.length === 1) {  // number comparison
        
            new Condition(prop, Comparison.numberComparison('>='), 10)

        }
        return new Condition(prop, () => true, "")
    }


    private readonly static stringComparison(comparison: string): (s1: string, s2: string) => boolean {
        return function(value: string, substring: string) {
            switch(comparison) {
                case 'contains':
                    return value.includes(substring) ?? false;
                case 'starts':
                    return value.startsWith(substring)
                case 'ends':
                    return value.endsWith(substring);
                default:
                    return false;
            }
        }
    }

    private readonly static numberComparison(comparisonSymbol: string): (x: number. y: number) => boolean {
        return function(value: number, referencedValue: number) {
            switch (comparisonSymbol) {
                case '<':
                    return value < referencedValue;
                case '>':
                    return value > referencedValue;
                case '=':
                    return value === referencedValue;
                case '<=':
                    return value <= referencedValue;
                case '>=':
                    return value >= referencedValue;
                default:
                    return false;
            }
        }
    }

}
