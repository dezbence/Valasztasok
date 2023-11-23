export default class KepviseloValasztas {
    #kerulet: number;
    #szavazatSzam: number;
    #vezetekNev: string;
    #keresztNev: string;
    #partJel: string;

    get nev(): string {
        return `${this.#vezetekNev} ${this.#keresztNev}`;
    }

    get szavazatSzam(): number {
        return this.#szavazatSzam;
    }

    get partJel(): string {
        return this.#partJel;
    }

    get partJel2(): string {
        if (this.#partJel == "-") return "Független";
        else return this.#partJel;
    }

    get partTeljes(): string {
        const nevMap: Map<string, string> = new Map<string, string>([
            ["GYEP", "Gyümölcsevők Pártja"],
            ["HEP", "Húsevők Pártja"],
            ["Tisz", "Tejivók Szövetsége"],
            ["ZEP", "Zöldséevők pártja"],
            ["-", "Független"],
        ]);
        return nevMap.get(this.#partJel) as string;
    }

    constructor(sor: string) {
        const adatok: string[] = sor.split(" ");
        this.#kerulet = parseInt(adatok[0]);
        this.#szavazatSzam = parseInt(adatok[1]);
        this.#keresztNev = adatok[2];
        this.#vezetekNev = adatok[3];
        this.#partJel = adatok[4];
    }
}
