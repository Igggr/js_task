// 10 minute

export function roundTo5(x: number): number {
    const mod = x % 5;
    const y = Math.floor(x / 5) * 5;
    if (mod >= 2.5) {
        return y + 5
    }
    return y
}