// Seleccionar los elementos del formulario
const form = document.getElementById("myForm2"),
  nombreInput = document.getElementById("nombre"),
  correoInput = document.getElementById("correo"),
  telefonoInput = document.getElementById("telefono"),
  empresaInput = document.getElementById("empresa"),
  puestoInput = document.getElementById("puesto"),
  mensajeInput = document.getElementById("mensaje"),
  thankYouMessage = document.getElementById("thank-you-content");

// Función para mostrar un mensaje de error
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Función para comprobar el patrón de un correo electrónico
const checkEmailPattern = (email) =>
  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);

// Función para manejar los datos del formulario
const handleFormData = (e) => {
  e.preventDefault();

  const [nombre, correo, telefono, empresa, puesto, mensaje] = [
    nombreInput,
    correoInput,
    telefonoInput,
    empresaInput,
    puestoInput,
    mensajeInput
  ].map((input) => input.value.trim());

  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  if (nombre === "") showError(nombreInput, "Ingrese su nombre");
  if (!checkEmailPattern(correo))
    showError(correoInput, "Ingrese un correo electrónico válido");
  if (telefono === "") showError(telefonoInput, "Ingrese su número de teléfono");
  if (empresa === "") showError(empresaInput, "Ingrese el nombre de la empresa");
  if (puesto === "") showError(puestoInput, "Ingrese el puesto que desempeña");
  if (mensaje === "") showError(mensajeInput, "Ingrese su mensaje");

  if (!document.querySelectorAll(".form-group .error").length) {
    form.style.display = "none";
    thankYouMessage.style.display = "block";
  }
};

// Añadir el evento submit al formulario
form.addEventListener("submit", handleFormData);
