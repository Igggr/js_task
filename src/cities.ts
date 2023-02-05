function JoinCitites(citites: string[]): string {
    return citites.join(",")    + "."
}

console.log(JoinCitites(['Москва', 'Санкт-Петербург', 'Воронеж']))