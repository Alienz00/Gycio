import { atliktiSudetis, atliktiAtimtis } from './mathOperations.js';
import { ekranas, mygtukai, mygtukuKlausytojai } from './domElements.js';

let pirmasSkaicius = '';
let veiksmas = '';
let antrasSkaicius = '';

mygtukuKlausytojai(mygtukai, apdorotiSkaiciu, apdorotiVeiksma,
    atliktiSkaiciavima, isvalytiEkrana);

function apdorotiSkaiciu(skaicius) {
    if (veiksmas === '') {
    pirmasSkaicius += skaicius;
    atnaujintiEkrana(pirmasSkaicius);
    } else {
        antrasSkaicius += skaicius;
        atnaujintiEkrana(antrasSkaicius);
    }
}

function apdorotiVeiksma(veiksmai) {
    if (pirmasSkaicius === '') return;
    veiksmas = veiksmai;
    }

function atliktiSkaiciavima() {
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

function atnaujintiEkrana(rezultatas) {
    ekranas.textContent = rezultatas;
}

function isvalytiEkrana() {
    pirmasSkaicius = '';
    veiksmas = '';
    antrasSkaicius = '';
    atnaujintiEkrana('0');
}