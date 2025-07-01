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
├── buildspec.yml
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



📘 Roteiro de configuração do AWS CodeBuild para testes com Cypress
🛠️ Pré-requisitos
- Conta AWS ativa
- Projeto Cypress com package.json configurado
- Repositório no GitHub conectado ao CodeBuild
- buildspec.yml no diretório raiz do projeto

---
## ✅ Etapas de configuração no CodeBuild
1. Acesse o AWS CodeBuild via Console da AWS.

2. Crie um novo projeto com as seguintes configurações:
- Project name: cypress-tests (ou outro nome desejado)
- Source provider: GitHub
- Repositório: selecione seu repositório
- Branch: main (ou o branch principal do seu projeto)

3. Ambiente de build (Environment):
- Environment image: Managed image
- Operating system: Amazon Linux
- Runtime: Standard
- Image: aws/codebuild/amazonlinux-x86_64-standard:5.0
- Privileged: habilite se for necessário usar docker-in-docker (não é o caso para Cypress, mas pode ser útil no futuro)

4. Service Role:

- Crie uma nova ou selecione uma existente (codebuild-cypress-tests-service-role)

5. Buildspec:
- Marque a opção "Use a buildspec file"
- O arquivo buildspec.yml deve estar na raiz do seu projeto

6. Logs (opcional):
- Ative os logs no CloudWatch para melhor rastreio

7. Finalize clicando em "Create build project"

---
## 🧪 Executando o build
Depois de configurar o projeto, clique em "Start build" e selecione o branch desejado. O CodeBuild vai:

1. Instalar o Node.js e dependências
2. Instalar bibliotecas necessárias para o Cypress no ambiente Linux
3. Rodar os testes com npx cypress run

---
## ✅ Resultado esperado
O log do CodeBuild deverá mostrar algo como:
```bash
✔  All specs passed!
```
Caso haja falhas nos testes, o log exibirá detalhes dos testes com erro.

---
## 💡 Dica extra
Se quiser visualizar os testes em modo interativo localmente, rode:
```bash
npx cypress open
```
