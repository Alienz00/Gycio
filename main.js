// Inicializuoti kintamuosius DOM elementams
const ekranas = document.getElementById('display');
const mygtukai = document.querySelectorAll('.btn');
let pirmasSkaicius = '';
let veiksmas = '';
let antrasSkaicius = '';


mygtukai.forEach(mygtukas => {
    mygtukas.addEventListener('click', () => {
        const reiksme = mygtukas.textContent;
        if (mygtukas.classList.contains('number')) {
            apdorotiSkaiciu(reiksme);
        } else if (mygtukas.classList.contains('operator')) {
            apdorotiVeiksma(reiksme);
        } else if (mygtukas.id === 'equals') {
            atliktiSkaiciavima();
        } else if (mygtukas.id === 'clear') {
            isvalytiEkrana();
        }
        
    });
});

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
            rezultatas = pirmas + antras;
            break;
        case '-':
            rezultatas = pirmas - antras;
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