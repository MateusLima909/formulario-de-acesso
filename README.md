# 🛡️ FlowAuth - Modern Auth Interface

> **Uma interface de autenticação dinâmica e responsiva, desenvolvida com foco em Experiência do Usuário (UX) e Clean Code.**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Em_Desenvolvimento-yellow)

## 📖 Sobre o Projeto

O **FlowAuth** é um projeto focado em criar a melhor experiência possível na porta de entrada de qualquer aplicação web: o login. 

A interface implementa um sistema de alternância entre Login e Cadastro sem recarregamento de página (Single Page Application feel), garantindo uma navegação fluida, validações assíncronas e feedback visual imediato para o usuário.

### ✨ Funcionalidades Principais

* **SPA-like Experience:** Troca instantânea entre os formulários de Login e Cadastro via manipulação inteligente do DOM.
* **Validação em Tempo Real:** * Verificação rigorosa da integridade do e-mail via Regex.
  * Validação de requisitos mínimos de segurança para senhas.
* **Feedback Dinâmico:** Respostas visuais imediatas com injeção de classes de erro, orientando o usuário sem quebrar o layout.
* **Design Reativo:** Centralização fluida com Flexbox, garantindo adaptação perfeita em qualquer tamanho de tela (Mobile-First approach).

---

## 📸 Screenshots

|<img src="assets/print-login.png" width="400" alt="Tela de Login">|<img src="assets/print-cadastro.png" width="400" alt="Tela de Cadastro">|
|:---:|:---:|
|**Interface de Login**|**Formulário de Cadastro**|

---

## 📐 Arquitetura e Destaques Visuais

Este projeto foi construído pensando em performance e código limpo, sem o peso de bibliotecas externas.

* **Desacoplamento Visual:** A lógica de erro gerencia estados (classes CSS) em vez de alterar estilos diretamente via JS. A função localiza o elemento irmão (`nextElementSibling`) para injetar a mensagem de alerta, mantendo o HTML semântico e limpo.
* **Interceptação de Eventos:** O script captura o `submit` e interrompe o fluxo padrão (`preventDefault()`), processando os dados localmente contra as regras de negócio antes de qualquer envio.
* **UI Animada (Micro-interações):** Implementação de uma barra