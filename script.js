const inputText = document.querySelector(".input-text");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar")

/* 'La letra "e" es convertida para "enter"'
'La letra "i" es convertida para "imes"'
'La letra "a" es convertida para "ai"'
'La letra "o" es convertida para "ober"'
'La letra "u" es convertida para "ufat" ' */

function btnEncriptar() {
    const textoEncriptado = encriptar(inputText.value);
    mensaje.value = textoEncriptado;

    if (inputText.value != "") {

        copiar.style.display = "block";
        mensaje.style.backgroundImage = "none";
        mensaje.placeholder = "";
    }
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputText.value);
    mensaje.value = textoDesencriptado;
    inputText = "";
}

function btnLimpiar() {
    inputText.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return stringEncriptada;
}

function desencriptar(stringEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][1])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}

function btnCopiar() {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}

