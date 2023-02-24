// JS already has such type - it is BigInt
// this functions are completely redundant
export function plus (x: bigint, y: bigint): bigint {
    return x + y;
}

export function minus(x: bigint, y: bigint): bigint {
    return x - y;
}

export function div(x: bigint, y: bigint): bigint {
    return x / y;
}

export function multiply(x: bigint, y: bigint): bigint {
    return x * y;
}