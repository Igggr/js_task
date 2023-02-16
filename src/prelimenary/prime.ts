export function isPrime(x: number): boolean {
    if (x < 0) {
        throw new Error("negative number not allowed")
    }
    if (x === 0 || x === 1) {
        return false
    }
    if (x === 2) {
        return true;
    }
    const root = Math.sqrt(x)
    for (let i = 2; i < root + 1; i++) {
        if (x % i === 0) {
            return false
        }
    }
    return true;
}