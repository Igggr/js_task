export function twoTimesInBoth(x: number[], y: number[]): number[] {

    const set1 = discardUniqueElement( count(x) );
    const set2 = discardUniqueElement( count(y) );

    // it's ambiguos in which order elemants should be.
    // make them follow the order of first occurences in first array

    const common = intersection(set1, set2);
    const res = [...common.values()];
    res.sort((v1, v2) => v1 - v2);
    return res;
}

function count<T>(x: T[]) {
    const counter = new Map<T, number>();
    for (const el of x) {
        if (counter.has(el)) {
            const was = counter.get(el) as  number;
            counter.set(el, was + 1)
        } else {
            counter.set(el, 1);
        }
    }
    return counter;
}

function discardUniqueElement<T>(map: Map<T, number>): Set<T> {
    const res = new Set<T>()
    for (const [key, val] of map.entries()) {
        if (val > 1) {
            res.add(key)
        }
    }
    return res;
}

function intersection<T>(s1 : Set<T>, s2: Set<T>): Set<T> {
    const res = new Set<T>();
    s1.forEach((val) => {
        if (s2.has(val)) {
            res.add(val)
        }
    })
    return res;
}