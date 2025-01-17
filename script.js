document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("botaologin").addEventListener("click", function () {
      const email = document.getElementById("email").value;
      const password = document.getElementById("senha").value;
      
      const emailError = document.getElementById("emailErrado");
      const passwordError = document.getElementById("senhaErrada");
      const mensagem = document.getElementById("mensagem");


      let isValid = true;

      // limpar
      emailError.style.display = "none";
      passwordError.style.display = "none";
      mensagem.textContent = "";

      // Validar email
      if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
        emailError.textContent = "E-mail inválido.";
        emailError.style.color = "red";
        emailError.style.display = "block";
        isValid = false;
    }

          // Validar senha
      if (password.length < 6) {
          passwordError.textContent = "A senha deve ter pelo menos 6 caracteres.";
          passwordError.style.color = "red";
          passwordError.style.display = "block";
          isValid = false;
      }
      
      //exebir mensagens de sucesso ou error
      if (isValid) {
        mensagem.textContent = "Login realizado com sucesso!";
        mensagem.style.color = "green";
      } else {
        mensagem.textContent = "Corrija os erros acima.";
        mensagem.style.color = "red";
      }

        
 });
});