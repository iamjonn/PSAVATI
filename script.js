document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botaologin").addEventListener("click", function () {
      const email = document.getElementById("email").value;
      const password = document.getElementById("senha").value;

      // limpar
      emailError.style.display = "none";
      passwordError.style.display = "none";

      // Validar email
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.display = "block";
        isValid = false;
    }
      

      

      
 });
});