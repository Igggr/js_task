export function capitalize(word: string): string {
    if (word.length === 0) {
        return ''
    }
    return word[0]?.toUpperCase() + word.slice(1).toLowerCase();
}

export function normalizeSpaces(text: string): string {
    return text.replace(/\s*([\.\?\!])\s*/g, '$1 ') 
        .replace(/\s*([,;])\s*/g, '$1 ')
        .replace(/\s\s+/g, ' ')
        .trim()
}

function getWords(line: string): string[] {
    return line.toLowerCase()
        .replace(/[\.\?\!]/g, ' ') // .?! 
        .replace(/[,;\-]/g, ' ') // -,:
        .split(' ')
        .filter((w) => w !== '')
}

export function countWords(line: string): number {
    return getWords(line).length;
}

export function countUniqueWords(line: string): Map<string, number> {
    const counter = new Map<string, number>();
    const words = getWords(line);

    for (const word of words) {
        const count = counter.get(word) ?? 0;
        counter.set(word, count+1);
    }
    return counter;
}