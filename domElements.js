export const ekranas = document.getElementById('display');
export const mygtukai = document.querySelectorAll('.btn');

export function mygtukuKlausytojai(mygtukai, apdorotiSkaiciu,
    apdorotiVeiksma, atliktiSkaiciavima, isvalytiEkrana) {
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
}