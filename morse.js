window.addEventListener('load',iniciar);
document.getElementById('rango').addEventListener('change',subirRango);
document.getElementById('play').addEventListener('click',iniciarFrecuencia);
function iniciar() {
    try {
        window.AudioContext = window.AudioContext || window.webKitAudioContext;
        context =new AudioContext();
        console.log('siu');
    } catch (e) {
        alert('La API no funciona');
    }
}
function iniciarFrecuencia(){
    osc = context.createOscillator();
    osc.frequency.value = document.getElementById('rango').value;
    osc.connect(context.destination);
    osc.start(0);
}
function subirRango(){
    let rango = document.getElementById('rango').value;
    osc.frequency.value = rango;
    document.querySelector('.ver-frecuencia').innerHTML = rango + "HZ";
}