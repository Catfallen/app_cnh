# 🚀 Setup do Backend — app_cnh (Prisma + SQLite)

Este guia descreve **passo a passo** como configurar o backend localmente para desenvolvimento.

---

## 1️⃣ Clonar o repositório

```bash
git clone https://github.com/Catfallen/app_cnh.git
```

---

## 2️⃣ Acessar o repositório

```bash
cd app_cnh
```

---

## 3️⃣ Acessar o backend

```bash
cd backend_teste
```

---

## 4️⃣ Criar o arquivo `.env`

Na **raiz do projeto (`backend_teste`)**, crie um arquivo chamado `.env` com o conteúdo abaixo:

```env
DATABASE_URL="file:./dev.db"
```

**Observações importantes:**
- O nome do arquivo deve ser exatamente `.env`
- Não adicionar espaços extras

---

## 5️⃣ Instalar as dependências

```bash
npm install
```

---

## 6️⃣ Gerar o Prisma Client (SQLite)

```bash
npm run prisma:sqlite:generate
```

---

## 7️⃣ Mensagem esperada no terminal

Após executar o comando acima, **uma das mensagens abaixo é esperada**:

### ✅ Caso já esteja tudo sincronizado
```text
Already in sync, no schema change or pending migration was found.
```

### ✅ Caso seja solicitada uma nova migration
```text
Enter a name for the new migration:
```

Pode ser **qualquer nome**, por exemplo:
```text
teste12
```

---

## ✅ Conclusão

O backend estará configurado e pronto para uso com SQLite em ambiente local.