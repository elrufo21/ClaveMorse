window.addEventListener('load',iniciar);

document.getElementById('rango').addEventListener('change',subirRango);

document.getElementById('play').addEventListener('click',iniciarFrecuencia);

document.getElementById('detener').addEventListener('click',detener);

document.getElementById('bucle').addEventListener('click',bucle);

let x = true;

function iniciar() {
    try {
        window.AudioContext = window.AudioContext || window.webKitAudioContext;
        context =new AudioContext();
        console.log('siu');
    } catch (e) {
        alert('La API no funciona');
    }
    let rango = document.getElementById('rango').value;
    document.querySelector('.ver-frecuencia').innerHTML = rango + "HZ";
}
function iniciarFrecuencia(){
    osc = context.createOscillator();
    osc.frequency.value = document.getElementById('rango').value;
    osc.connect(context.destination);
    osc.start(0);
    setTimeout(() => {
        osc.stop();
    }, 1000);
}
function subirRango(){
    let rango = document.getElementById('rango').value;
    osc.frequency.value = rango;
    document.querySelector('.ver-frecuencia').innerHTML = rango + "HZ";
}
function detener(){
    osc.stop();
}

function bucle(){
    setTimeout(() => {
        iniciarFrecuencia();
    }, 2000);
}


