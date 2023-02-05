function printMultiplicationTable(x: number): void {
    const table = createMultiplicationTable(x);
    const padedTable = padTable(table);
    
    for (const line of padedTable) {
        console.log(line.join(' '))
    }
}

export function createMultiplicationTable(x: number): string[][] {

    function fill(i: number, j: number): string {
        if (i === 0 && j === 0) return '';
        if (i === 0) return j.toString();
        if (j === 0) return i.toString();
        return (i * j).toString()
    }
    var table : string[][]= Array(x+1).fill(Array(x+1).fill(''))
        .map((line, i) => line.map((_: number, j: number) => fill(i, j)))
    
    return table;
}

function padTable(table: string[][]): string[][] {
    const elemWidth = table[table.length -1]!.map(el => el.length);

    const padedTable = table.map((line) => line.map((el, i) => el.padStart(elemWidth[i] || 0, " ")));
    return padedTable
}


// printMultiplicationTable(3)
printMultiplicationTable(5)
// printMultiplicationTable(20)