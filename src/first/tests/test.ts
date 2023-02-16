import { Product, filterProducts } from "../product"

describe("test Product", () => {
    it("", () => {
        const query = "name-contains-fd&price-=2-&quantity->5&description-ends-abc"
        const products: Product[] = [
            new Product('fd', 2, 6, "abc"),

        ]
        const actual = filterProducts(products, query);
        expect(actual).toEqual(products);

    })
})