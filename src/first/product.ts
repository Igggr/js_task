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
        .map((query) => Condition.create(query));

    console.log(conditions);

    return products.filter((product) => {
        return conditions.every((condition) => condition.check(product));
    });
}

type Comparison<T> = (t1: T, t2: T) => boolean

// type NumberComparison = '<' | '=' | '>' | '<=' | '>=';
// type string = 'contains' | 'starts' | 'ends';

class Condition<V extends string | number> {
    private readonly property: string;
    private readonly comparison: Comparison<V>;
    private readonly value: V;

    private constructor(property: string, comparison: Comparison<V>, value: V) {
        this.property = property;
        this.comparison = comparison;
        this.value = value;
    }

    check(product: Product): boolean {
        const property = this.property;
        if (property in product) {
            const productValue: Product[keyof Product] = (product as any)[property] as Product[keyof Product];
            return this.comparison(this.value, productValue as V)
        }
        return false;
    }

    public static create(query: string): Condition<number> | Condition<string> {
        let [property, ...how] = query.split('-')
        property = property ?? ''

        if (how.length === 2) { // string comparison
            const [comparisonSymbol, value] = how;
   
           new Condition<string>(property, Condition.stringComparison(comparisonSymbol ?? ''), value ?? '')

        } else if (how.length === 1) {  // number comparison
            const { comparison, value } = Condition.comp(how[0] ?? '')
        
            new Condition<number>(property, comparison, value)

        }
        // incorrect string
        return new Condition<any>('', () => false, '')
    }


    private static stringComparison(comparison: string): Comparison<string> {
        return function(value: string, substring: string) {
            switch(comparison) {
                case 'contains':
                    return value.includes(substring);
                case 'starts':
                    return value.startsWith(substring)
                case 'ends':
                    return value.endsWith(substring);
                default: // incorrect operation
                    return false;
            }
        }
    }

    private static comp(how: string): { comparison: Comparison<number>, value: number } {
        if (how.startsWith('>=')) {
            return {
                value: +how.slice(2),
                comparison: (x, y) => x >= y,
            }
        }
        if (how.startsWith('<=')) {
            return {
                value: +how.slice(2),
                comparison: (x, y) => x <= y,
            }
        }
        if (how.startsWith('>')) {
            return {
                value: +how.slice(1),
                comparison: (x, y) => x > y,
            }
        }
        if (how.startsWith('<')) {
            return {
                value: +how.slice(1),
                comparison: (x, y) => x < y,
            }
        }
        if (how.startsWith('=')) {
            return {
                value: +how.slice(1),
                comparison: (x, y) => x === y,
            }
        }

        return {  // incorrect operation
            value: NaN,
            comparison: () => false,
        }
        
    }
}
