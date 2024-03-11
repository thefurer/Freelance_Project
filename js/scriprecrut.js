// Element selection
const form = document.getElementById("myForm1"),
  fullnameInput = document.getElementById("fullname"),
  emailInput = document.getElementById("email"),
  phoneInput = document.getElementById("phone"),
  addressInput = document.getElementById("address"),
  empresaInput = document.getElementById("empresa"),
  startDateInput = document.getElementById("start-date"),
  salaryInput = document.getElementById("salary"),
  conditionsInput = document.getElementById("conditions"),
  thankYouMessage = document.getElementById("thank-you-content"); // Asegúrate de tener este elemento en tu HTML

// Error handling function
const showError = (field, errorText) => {
  field.classList.add("error");
  const errorElement = document.createElement("small");
  errorElement.classList.add("error-text");
  errorElement.innerText = errorText;
  field.closest(".form-group").appendChild(errorElement);
};

// Email pattern check
const checkEmailPattern = (email) =>
  /^[^ ]+@[^ ]+\.[a-z]{2,3}$/.test(email);

// Form data handling
const handleFormData = (e) => {
  e.preventDefault();

  // Updated to include the new input fields
  const [fullname, email, phone, address, empresa, startDate, salary, conditions] = [
    fullnameInput,
    emailInput,
    phoneInput,
    addressInput,
    empresaInput,
    startDateInput,
    salaryInput,
    conditionsInput
  ].map((input) => input.value.trim());

  // Clear previous errors
  document
    .querySelectorAll(".form-group .error")
    .forEach((field) => field.classList.remove("error"));
  document
    .querySelectorAll(".error-text")
    .forEach((errorText) => errorText.remove());

  // Updated validation checks
  if (fullname === "") showError(fullnameInput, "Ingrese su nombre completo");
  if (!checkEmailPattern(email))
    showError(emailInput, "Ingrese un correo electrónico válido");
  if (phone === "") showError(phoneInput, "Ingrese su número de teléfono");
  if (address === "") showError(addressInput, "Ingrese su dirección");
  if (empresa === "") showError(empresaInput, "Ingrese el nombre de la empresa");
  if (startDate === "") showError(startDateInput, "Seleccione su fecha de inicio");
  if (salary === "") showError(salaryInput, "Ingrese su salario");
  if (conditions === "") showError(conditionsInput, "Ingrese sus condiciones");

  // Display thank you message if no errors
  if (!document.querySelectorAll(".form-group .error").length) {
    form.style.display = "none";
    thankYouMessage.style.display = "block"; // Asegúrate de tener este elemento en tu HTML
  }
};

// Form submit event
form.addEventListener("submit", handleFormData);
