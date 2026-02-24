# 🛡️ FlowAuth - Modern Auth Interface

> **Uma interface de autenticação dinâmica de alta fidelidade, desenvolvida para proporcionar uma transição fluida entre estados de Login e Cadastro sem interrupções de carregamento.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em_Evolução-brightgreen)

## 📖 Sobre o Projeto

O **FlowAuth** é um projeto focado em elevar a Experiência do Usuário (UX) no principal ponto de contato de qualquer aplicação: a autenticação. 

Com um forte foco em **Micro-interações** e **Integridade de Dados no Front-end**, a interface garante navegação orgânica, tratamento de erros inteligente e validação rigorosa antes de qualquer envio de dados para o servidor.

### 🚀 Novas Funcionalidades e Melhorias

* **Transições Suaves (UX):** Implementação de animações baseadas em `opacity` e `transform` (Y-axis + Scale) para uma alternância de telas orgânica e sem recarregamentos.
* **Sanitização Dinâmica:** Filtro em tempo real no campo de nome utilizando Regex para impedir a entrada de caracteres numéricos ou especiais diretamente no evento `oninput`.
* **Validação Avançada:** Sistema de checagem dupla para senhas (igualdade entre senha e confirmação) e validação estrita de formato de e-mail.
* **Resiliência CSS:** Uso de especificidade controlada (incluindo `!important` na classe `.hidden`) para garantir que o layout nunca quebre, independentemente da resolução da tela.
* **Clean DOM:** Gerenciamento centralizado de erros que limpa o estado de alerta instantaneamente assim que o usuário volta a digitar no campo corrigido.

---

## 📸 Screenshots

|<img src="assets/print-login.png" width="400" alt="Tela de Login Animada">|<img src="assets/print-cadastro.png" width="400" alt="Validação de Cadastro">|
|:---:|:---:|
|**Interface de Login**|**Formulário de Cadastro**|

---

## 📐 Arquitetura da Interface

O desenvolvimento do FlowAuth utilizou técnicas avançadas de estruturação front-end para garantir isolamento de escopo e fluidez visual:

* **Animações de Entrada (Motion Design):** A interface utiliza a técnica de Motion Design para guiar o olhar do usuário. Sempre que um formulário é ativado, ele executa um efeito de *fade-in* com um leve deslizamento vertical de 20px, criando uma percepção de profundidade e modernidade.
* **Lógica de Identidade (Isolamento de Escopo):** Diferente de formulários simples, o FlowAuth trata cada contexto (Login vs. Cadastro) com identificadores únicos (IDs). Isso permite que os scripts de validação operem de forma totalmente isolada e precisa, evitando vazamento ou conflitos de dados no navegador.

---

## 🛠️ Stack Tecnológica

| Tecnologia | Aplicação no Projeto |
| :--- | :--- |
| **HTML5** | Estruturação semântica com IDs únicos para múltiplos formulários. |
| **CSS3** | Flexbox, `@keyframes` para gradientes infinitos e transições suaves. |
| **JavaScript (ES6+)** | Manipulação do DOM, Regex para sanitização e lógica de validação dupla. |

---

## 📂 Como Executar o Projeto

O projeto não possui dependências externas complexas e pode ser rodado localmente com facilidade:

1. Clone este repositório para a sua máquina local.
2. Certifique-se de manter os arquivos `index.html` e `estilo.css` (além dos scripts, se separados) no mesmo diretório.
3. Abra o arquivo `index.html` em qualquer navegador web moderno.

> **💡 Dica de Desenvolvedor:** Utilize a extensão **Live Server** (no VS Code) para abrir o projeto. Isso garante a visualização das animações de transição e micro-interações com a melhor taxa de quadros (FPS) possível.

---

## 📝 Roadmap de Evolução

O projeto continua sendo aprimorado. Confira o status das implementações:

- [x] Transições suaves entre telas (Login/Cadastro).
- [x] Validação rigorosa e checagem de igualdade de senhas.
- [ ] **Visibilidade:** Implementar funcionalidade de "Ver Senha" (*Toggle Visibility*).
- [ ] **Backend:** Integração com serviço de autenticação via API REST.

---

## 🤝 Contribuição

Feedbacks sobre usabilidade, acessibilidade e performance das animações são sempre bem-vindos!

## 📝 Autor

Desenvolvido por **[Mateus Lima](https://www.linkedin.com/in/mateuslima-santos)**.