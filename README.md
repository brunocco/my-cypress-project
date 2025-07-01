
# 💻 Projeto Cypress - Testes de Login no OrangeHRM com execução no AWS CodeBuild

Este repositório contém um projeto de automação de testes E2E desenvolvido com [Cypress](https://www.cypress.io/), utilizando como sistema alvo o [OrangeHRM Demo](https://opensource-demo.orangehrmlive.com).

O objetivo do projeto é praticar automação de testes, integrar com o **Amazon Q Developer** e utilizar **pipelines no Amazon codebuild** para execução contínua (CI/CD).

---

## 👤 Autor

**Bruno Cesar**  
Estudante de Análise e Desenvolvimento de Sistemas  
Analista QA + Suporte Cloud = QA Cloud  
🔗 [LinkedIn](https://www.linkedin.com/in/bruno-cesar-704265223/)

---

## 🚀 Tecnologias Utilizadas

- Cypress ^14.5.0  
- Node.js  
- Amazon Q Developer (IA de apoio)  
- Amazon CodeCatalyst (DevOps e CI/CD)  

---

## 📁 Estrutura do Projeto

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

## ⚙️ Como Executar o Projeto Localmente

1. Clone o repositório:

```bash
git clone https://github.com/brunocesardev/my-cypress-project.git
cd my-cypress-project
```

2. Instale as dependências:

```bash
npm install
```

3. Para abrir o Cypress com interface gráfica:

```bash
npx cypress open
```

4. Para rodar os testes no terminal (modo headless):

```bash
npm test
```

---

## 🌐 Site Alvo dos Testes

🔗 https://opensource-demo.orangehrmlive.com

---

## 📘 Integração com AWS CodeBuild

### 🛠️ Pré-requisitos

- Conta AWS ativa  
- Projeto Cypress com `package.json` e `buildspec.yml`  
- Repositório no GitHub conectado ao CodeBuild  

---

### ✅ Etapas de Configuração no CodeBuild

1. Acesse o **AWS CodeBuild** via Console da AWS.

2. Crie um novo projeto com:

   - **Project name**: `cypress-tests`  
   - **Source provider**: GitHub  
   - **Repositório e branch**: selecione os correspondentes ao seu projeto  

3. Em **Environment (Ambiente)**:

   - **Environment image**: *Managed image*  
   - **Operating system**: *Amazon Linux*  
   - **Runtime**: *Standard*  
   - **Image**: `aws/codebuild/amazonlinux-x86_64-standard:5.0`  
   - **Privileged**: Desnecessário para Cypress

4. **Service role**:

   - Crie uma nova ou selecione uma existente (ex: `codebuild-cypress-tests-service-role`)

5. Em **Buildspec**:

   - Selecione **"Use a buildspec file"**  
   - O arquivo `buildspec.yml` deve estar na raiz do projeto

6. (Opcional) Ative logs no **CloudWatch** para acompanhar a execução

7. Clique em **"Create build project"**

---

## 🧪 Executando o Build

Após a configuração, clique em **"Start build"**. O CodeBuild irá:

1. Instalar o Node.js e dependências do projeto  
2. Instalar as bibliotecas necessárias para o Cypress  
3. Executar os testes com `npx cypress run`  

---

## ✅ Resultado Esperado

Você deve ver algo como:

```bash
✔ All specs passed!
```

Caso haja falhas, o log mostrará detalhes do erro para depuração.

---

---

## ✅ Conclusão

Este projeto prático demonstrou como automatizar testes E2E com Cypress em um sistema real (OrangeHRM Demo), integrando-os com ferramentas modernas da AWS como o CodeBuild. Além de reforçar conceitos de automação, a prática envolveu configuração de CI/CD, uso de infraestrutura em nuvem e integração com repositórios Git.

Esse tipo de automação é essencial para garantir qualidade contínua no desenvolvimento de aplicações e representa um passo importante na jornada como QA e desenvolvedor em ambientes de DevOps e Cloud.

🔁 Projeto em constante evolução!


