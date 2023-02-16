export function pluralizer(x: number): string {
  
    const mod100 = x % 100;
    if (mod100 >= 10 && mod100 <= 20) {
        return `${x} компьютеров`
    }

    switch (x % 10) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
            return `${x} компьютеров`
        case 1:
            return `${x} компьютер` 
        case 2:
        case 3:
        case 4:
            return `${x} компьютера`
        default:
            throw new Error("WTF?");
    }

} 