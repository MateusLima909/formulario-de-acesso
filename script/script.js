// 1. INICIALIZAÇÃO
feather.replace();

// 2. SELETORES DE ELEMENTOS
const formLogin = document.getElementById('formLogin');
const formCadastro = document.getElementById('formCadastro');
const loginLink = document.getElementById('ir-para-cadastro');
const cadastroLink = document.getElementById('ir-para-login');
const subtexto = document.getElementById('subtexto-lateral');
const themeCheckbox = document.getElementById('checkbox');
const body = document.body;

// 3. NAVEGAÇÃO ENTRE TELAS (CORRIGIDO)
loginLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Usamos classList para não mexer na classe de tema
    body.classList.remove('layout-login');
    body.classList.add('layout-cadastro');
    
    subtexto.textContent = "Crie sua conta agora";
    document.getElementById('container-login').classList.add('hidden');
    document.getElementById('container-cadastro').classList.remove('hidden');
});

cadastroLink.addEventListener('click', function(e) {
    e.preventDefault();
    
    body.classList.remove('layout-cadastro');
    body.classList.add('layout-login');
    
    subtexto.textContent = "Gestão de Acesso Inteligente";
    document.getElementById('container-cadastro').classList.add('hidden');
    document.getElementById('container-login').classList.remove('hidden');
});

// 4. LÓGICA DE TEMA (DARK/LIGHT MODE)
const applyTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-mode');
        if(themeCheckbox) themeCheckbox.checked = false; // Ajuste conforme seu HTML
    } else {
        body.classList.remove('dark-mode');
        if(themeCheckbox) themeCheckbox.checked = true;
    }
};

// Verifica preferências salvas ou do sistema
const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme ? savedTheme : (prefersDark ? 'dark' : 'light');

applyTheme(initialTheme);

if(themeCheckbox) {
    themeCheckbox.addEventListener('change', () => {
        const newTheme = themeCheckbox.checked ? 'light' : 'dark';
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
}

// 5. VALIDAÇÃO DE CAMPOS (LOGIN)
function validarCamposLogin() {
    const inputs = formLogin.querySelectorAll('input');
    inputs.forEach(el => el.classList.remove('error'));

    const inputEmail = document.getElementById('email-login');
    const inputSenha = document.getElementById('senha-login');
    const emailValue = inputEmail.value.trim();
    const senhaValue = inputSenha.value.trim();
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let formularioValido = true;

    if (emailValue === "" || !regex.test(emailValue)) {
        exibirErro(inputEmail, "Insira um e-mail válido.");
        formularioValido = false;
    }

    if (senhaValue.length < 8) {
        exibirErro(inputSenha, "A senha precisa ter no mínimo 8 caracteres.");
        formularioValido = false;
    }

    if (formularioValido) alert("Login realizado com sucesso!");
}

// 6. VALIDAÇÃO DE CAMPOS (CADASTRO)
function validarCamposCadastro() {
    const inputs = formCadastro.querySelectorAll('input');
    inputs.forEach(el => el.classList.remove('error'));
    
    const inputNome = document.getElementById('nome-cadastro');
    const inputEmail = document.getElementById('email-cadastro');
    const inputSenha = document.getElementById('senha-cadastro');
    const inputConfirmaSenha = document.getElementById('confirmaSenha');

    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let formularioValido = true;

    if (inputNome.value.trim() === "") {
        exibirErro(inputNome, "O campo nome não pode ser vazio");
        formularioValido = false;
    } 

    if (!regex.test(inputEmail.value.trim())) {
        exibirErro(inputEmail, "E-mail inválido.");
        formularioValido = false;
    }

    if (inputSenha.value.trim().length < 8) {
        exibirErro(inputSenha, "Senha muito curta.");
        formularioValido = false;
    }

    if (inputSenha.value.trim() !== inputConfirmaSenha.value.trim()) {
        exibirErro(inputConfirmaSenha, "As senhas estão diferentes!");
        formularioValido = false;
    }

    if (formularioValido) alert("Cadastro realizado com sucesso!");
}

// 7. EVENTOS DE SUBMIT
formLogin.addEventListener('submit', (e) => { e.preventDefault(); validarCamposLogin(); });
formCadastro.addEventListener('submit', (e) => { e.preventDefault(); validarCamposCadastro(); });

// 8. FUNÇÕES AUXILIARES (UI)
function toggleSenha(botao) {
    const input = botao.previousElementSibling;
    const isPassword = input.type === 'password';
    input.type = isPassword ? 'text' : 'password';
    botao.innerHTML = `<i data-feather="${isPassword ? 'eye-off' : 'eye'}"></i>`;
    feather.replace();
}

function exibirErro(input, mensagem) {
    input.classList.add("error");
    const container = input.closest('.input-group');
    const spanErro = container.querySelector('.msg-erro');
    spanErro.textContent = mensagem;
}