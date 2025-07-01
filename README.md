# 💻 Projeto Cypress - Testes de Login no OrangeHRM

Este repositório contém um projeto de automação de testes E2E desenvolvido com [Cypress](https://www.cypress.io/), utilizando como sistema de testes o [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com).

O projeto foi criado com o objetivo de praticar automação de testes, integrar com o **Amazon Q Developer** e futuramente utilizar **pipelines no Amazon CodeCatalyst** para execução contínua dos testes.

---

## 👤 Autor

**Bruno Cesar**  
Estudante de Análise e Desenvolvimento de Sistemas • Analista QA + Suporte cloud = QA cloud 
[LinkedIn](https://www.linkedin.com/in/bruno-cesar-704265223/)

---

## 🚀 Tecnologias utilizadas

- Cypress ^14.5.0
- Node.js
- Amazon Q Developer (IA de apoio)
- Amazon CodeCatalyst (DevOps e CI/CD)

---
📦 Estrutura do Projeto
```bash
my-cypress-project/
├── cypress/
│   └── e2e/
│       └── login.spec.js
├── cypress.config.js
├── package.json
└── README.md
```
---
## 📋 Casos de Teste

- ✅ Login com sucesso (`Admin` / `admin123`)
- ❌ Login com falha (senha incorreta)

---

## ⚙️ Como executar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/brunocesardev/my-cypress-project.git
cd my-cypress-project


```bash
npm install
```

Para abrir o Cypress com interface gráfica:
```bash
npm run open
```

Para rodar os testes no terminal (modo headless):
```bash
npm test
```

✅ Casos de Teste
- Login com sucesso

- Login com falha (senha incorreta)

🧪 Site alvo dos testes
🔗 https://opensource-demo.orangehrmlive.com



🛠️ Próximos passos
 Criar pipeline no Amazon CodeCatalyst

 Integrar com GitHub Actions (alternativa)

 Adicionar mais cenários: logout, cadastro, menu lateral
