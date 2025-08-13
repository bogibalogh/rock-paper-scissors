let jatekosPont = 0;
let szamitogepPont = 0;
let dontetlen = 0;

const jatekosPontElem = document.getElementById('jatekos_pont');
const szamitogepPontElem = document.getElementById('szamitogep_pont');
const dontetlenElem = document.getElementById('dontetlen');
const szamitogepValasztasaElem = document.getElementById('szamitogep_valasztasa');
const winOrLoseElem = document.getElementById('win-or-lose');

function szamitogepValasztasa() {
    return ['Kő', 'Papír', 'Olló'][Math.floor(Math.random() * 3)];
}

function Play(jatekosValasztas) {
    const szamitogepValaszt = szamitogepValasztasa();
    
    szamitogepValasztasaElem.textContent = szamitogepValaszt;

    let eredmeny = '';

    if (jatekosValasztas === szamitogepValaszt) {
        dontetlen++;
        eredmeny = 'Döntetlen!';
    } else if ((jatekosValasztas === 'Kő' && szamitogepValaszt === 'Olló') ||
        (jatekosValasztas === 'Olló' && szamitogepValaszt === 'Papír') ||
        (jatekosValasztas === 'Papír' && szamitogepValaszt === 'Kő')) {
        jatekosPont++;
        eredmeny = 'Te nyertél!';
    } else {
        szamitogepPont++;
        eredmeny = 'A számítógép nyert!';
    }

    winOrLoseElem.textContent = eredmeny;
    updateScoreboard();
    checkWinner();
}

function updateScoreboard() {
    jatekosPontElem.textContent = `Játékos: ${jatekosPont}`;
    szamitogepPontElem.textContent = `Számítógép: ${szamitogepPont}`;
    dontetlenElem.textContent = `Döntetlen: ${dontetlen}`;
}

function checkWinner() {
    if (jatekosPont === 10) {
        document.getElementById('win-message').innerHTML = "Gratulálok, te nyertél!  &#x1F600;";
        disableOptions();
    } else if (szamitogepPont === 10) {
        document.getElementById('win-message').innerHTML = "A számítógép nyert! &#x1F614;";
        disableOptions();
    } else if (dontetlen === 10) {
        document.getElementById('win-message').innerHTML = "Döntetlen!  &#x1F610;";
        disableOptions();
    }
}

function disableOptions() {
    const optionsButtons = document.querySelectorAll('.options_this');
    optionsButtons.forEach(button => {
        button.disabled = true;
    });
}

function RestartGame() {
    jatekosPont = 0;
    szamitogepPont = 0;
    dontetlen = 0;
    function RestartGame() {
    jatekosPont = 0;
    szamitogepPont = 0;
    dontetlen = 0;
    document.getElementById('win-message').textContent = '';
    updateScoreboard();
    enableOptions();
}

function enableOptions() {
    const optionsButtons = document.querySelectorAll('.options_this');
    optionsButtons.forEach(button => {
        button.disabled = false;
    });
}
    updateScoreboard();
    enableOptions();
}

function enableOptions() {
    const optionsButtons = document.querySelectorAll('.options_this');
    optionsButtons.forEach(button => {
        button.disabled = false;
    });
}
