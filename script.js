document.getElementById('toggleRegister').addEventListener('click', function(event) {
    event.preventDefault(); // Impede o comportamento padrão do link
    toggleForms(); // Alterna entre os formulários de login e registro
  });
  
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    login();
  });
  
  document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
    register();
  });
  
  function toggleForms() {
    var loginForm = document.getElementById('loginForm');
    var registerForm = document.getElementById('registerForm');
  
    loginForm.style.display = (loginForm.style.display === 'none') ? 'block' : 'none';
    registerForm.style.display = (registerForm.style.display === 'none') ? 'block' : 'none';
  }
  
  function login() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    // Simulação de autenticação
    if (email === 'usuario@exemplo.com' && senha === 'senha123') {
      alert('Login bem-sucedido!');
      // Aqui você pode redirecionar o usuário para a página desejada
    } else {
      alert('Email ou senha incorretos!');
    }
  }
  
  function register() {
    var registerEmail = document.getElementById('registerEmail').value;
    var registerSenha = document.getElementById('registerSenha').value;
  
    // Simulação de cadastro
    alert('Cadastro bem-sucedido! Agora você pode fazer login.');
    toggleForms(); // Volta para o formulário de login após o registro
  }
  