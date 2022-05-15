const inputEntrada = document.querySelector(".entrada-texto");
const inputSaida = document.querySelector(".saida-texto");
const mensagens = document.querySelector(".mensagem");
const avisoUm = mensagens.querySelector(".aviso-um");
const avisoDois = mensagens.querySelector(".aviso-dois");
const botaoCopiar = mensagens.querySelector(".btn-copiar");

botaoCopiar.style.display = "none"

function btnEncriptar() {

    event.preventDefault();
    const textoEncriptado = encriptar(inputEntrada.value);
    inputSaida.value = textoEncriptado;
    inputEntrada.value = "";
    inputSaida.style.backgroundImage = "none"
    avisoUm.style.display = "none"
    avisoDois.style.display = "none"
    botaoCopiar.style.display = "block"
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDecriptar() {
    event.preventDefault();
    const textoDecriptado = decriptar(inputEntrada.value)
    inputSaida.value = textoDecriptado;
    inputEntrada.value = "";
    inputSaida.style.backgroundImage = "none"
    avisoUm.style.display = "none"
    avisoDois.style.display = "none"
    botaoCopiar.style.display = "block"

}

function decriptar(stringDecriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDecriptada = stringDecriptada.toLowerCase();

    for (i = 0; i < matrizCodigo.length; i++) {
        if (stringDecriptada.includes(matrizCodigo[i][0])) {
            stringDecriptada = stringDecriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDecriptada;
}

function btnCopiar() {

    var content = document.getElementById('text-output');
    content.select();
    document.execCommand("copy");
    alert("Copiado!");
    inputSaida.value = "";
}
