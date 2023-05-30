let areaEncriptar = document.getElementById("areaEncriptar");

const btnEncriptar = document.querySelector(".btn__encriptar");
const btnDesencriptar = document.querySelector(".btn__desencriptar");

const elements = document.querySelectorAll(".elements");

const btnCopiar = document.querySelector(".boton__aside");
const txtcopiado = document.querySelector(".txtcopiado");

let textEncriptado = document.querySelector(".tex_encriptado");

// Código para ocultar elementos no requeridos del aside
const ocultarElementos = () => {
  elements.forEach((elemento) => elemento.classList.add("ocultar"));
  btnCopiar.classList.remove("ocultar");
  textEncriptado.classList.remove("ocultar");
};

// Código que sirve para encriptar
const encriptar = () => {
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/e/gi, "enter")
    .replaceAll(/i/gi, "imes")
    .replaceAll(/o/gi, "ober")
    .replaceAll(/a/gi, "ai")
    .replaceAll(/u/gi, "ufat");
  textEncriptado.value = texto;
  areaEncriptar.value = "";
};

// Código que sirve para desencriptar
const desenCriptar = () => {
  let texto = areaEncriptar.value;
  texto = texto
    .replaceAll(/enter/gi, "e")
    .replaceAll(/imes/gi, "i")
    .replaceAll(/ober/gi, "o")
    .replaceAll(/ai/gi, "a")
    .replaceAll(/ufat/gi, "u");
  textEncriptado.value = texto;
  areaEncriptar.value = "";
};

// Comprobación de los campos vacíos, de ser true recargamos la pagina automáticamente
const comprobarVacios = () => {
  if (areaEncriptar.value.trim() == "") {
    alert("ingresa una palabra");
    location.reload();
  }
};

// Detectamos si tiene activado el Bloq Mayus para las letras mayúsculas
areaEncriptar.addEventListener("keyup", (event) => {
  if (event.getModifierState("CapsLock")) {
    alert("Solo se puede escribir en minúscula");
    location.reload();
  }
});

// Encriptación del texto
btnEncriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  encriptar();
});

// Desencriptación del texto
btnDesencriptar.addEventListener("click", () => {
  comprobarVacios();
  ocultarElementos();
  desenCriptar();
});

// Boton para copiar
btnCopiar.addEventListener("click", () => {
  // Acceso a los valores
  textEncriptado.select();
  textEncriptado.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(textEncriptado.value);

  // Agregación y eliminación del anuncio de copiado
  txtcopiado.classList.remove("ocultar");
  setTimeout(() => {
    txtcopiado.classList.add("ocultar");
  }, 1000);
});