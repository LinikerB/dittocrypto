const textArea = document.querySelector('.text_area');
const TextoDescriptografado = document.querySelector('.text_descriptografado');
const imagemDitto = document.querySelector('.imagem_ditto');
const dittoNeutro = './assets/ditto_neutro.png';
const dittoConfuso = './assets/ditto_confuso.png';
const dittoFeliz = './assets/ditto_sorrindo.png';
const textAnimation = document.getElementById('textAnimation');

function btnEncriptar() {
  textAnimation.textContent = "Estou criptografaaaaaaaando..";
  textAnimation.classList.add('typing');
  
  const textoEscriptado = encriptar(textArea.value);
  TextoDescriptografado.value = textoEscriptado;
  textArea.value = '';
  
  setTimeout(() => {
    TextoDescriptografado.classList.remove('invisivel'); // Torna o campo visível
    TextoDescriptografado.classList.add('visible');
  }, 4000);

  imagemDitto.classList.add('girar');
  imagemDitto.src = dittoConfuso;

  setTimeout(() => {
    imagemDitto.src = dittoNeutro; // Volta para a imagem original após 1 segundo
  }, 4000);

  setTimeout(() => imagemDitto.classList.remove('girar'), 4000); // Remove a classe após a animação

  setTimeout(() => {
    textAnimation.textContent = "Prontinho, agora é só copiar";
    textAnimation.classList.remove('typing');
    textAnimation.classList.add('typing');
  }, 4000);

  setTimeout(() => {
    textAnimation.classList.add('texto-desaparecer'); // Adiciona a classe para desaparecer
  }, 6000); // 4000ms + 2000ms (2 segundos para desaparecer)
}





function encriptar(stringEncriptada) {
  let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])){
      stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
    }
  }
  return stringEncriptada;
}

function btnDesencriptar() {
  const textoDesencriptado = desencriptar(textArea.value);
  TextoDescriptografado.value = textoDesencriptado;
  textArea.value = '';

  imagemDitto.classList.add('aumentar');
  imagemDitto.src = dittoFeliz;

  setTimeout(() => {
    imagemDitto.src = dittoNeutro; // Volta para a imagem original após 1 segundo
  }, 1000);

  setTimeout(() => imagemDitto.classList.remove('aumentar'), 1000); // Remove a classe após a animação
}

function desencriptar(stringDesencriptada) {
  let matrizCodigo = [["e", "enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]];
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])){
      stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
    }
  }
  return stringDesencriptada;
}

function copiarTexto() {
  TextoDescriptografado.select(); // Seleciona o texto
  TextoDescriptografado.setSelectionRange(0, 99999); // Para dispositivos móveis
  document.execCommand("copy"); // Copia o texto selecionado
  alert("Texto copiado para a área de transferência!"); // Alerta ao usuário

}


function limparCampos() {
  textArea.value = ''; // Limpa o campo textArea
  TextoDescriptografado.value = ''; // Limpa o campo TextoDescriptografado
}
