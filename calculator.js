import { atliktiSudetis, atliktiAtimtis } from "./mathOperations.js";
import { ekranas } from "./domElements.js";

let pirmasSkaicius = '';
let veiksmas = '';
let antrasSkaicius = '';

export function apdorotiSkaiciu(skaicius) {
    if (veiksmas === '') {
    pirmasSkaicius += skaicius;
    atnaujintiEkrana(pirmasSkaicius);
    } else {
        antrasSkaicius += skaicius;
        atnaujintiEkrana(antrasSkaicius);
    }
}

export function apdorotiVeiksma(veiksmai) {
    if (pirmasSkaicius === '') return;
    veiksmas = veiksmai;
}
    
export function atliktiSkaiciavima() {
    let rezultatas;
    const pirmas = parseFloat(pirmasSkaicius);
    const antras = parseFloat(antrasSkaicius);

    if (isNaN(pirmas) || isNaN(antras)) return;

    switch (veiksmas) {
        case '+':
            rezultatas = atliktiSudetis(pirmas, antras);
            break;
        case '-':
            rezultatas = atliktiAtimtis(pirmas, antras);
            break;
        default:
            return;        
    }
    atnaujintiEkrana(rezultatas);
    pirmasSkaicius = rezultatas.toString();
    antrasSkaicius = '';
    veiksmas = '';
}

export function atnaujintiEkrana(rezultatas) {
    ekranas.textContent = rezultatas;
}

export function isvalytiEkrana() {
    pirmasSkaicius = '';
    veiksmas = '';
    antrasSkaicius = '';
    atnaujintiEkrana('0');
}