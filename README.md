# 🌱 Seed AI

Seed AI é uma aplicação web de chat inteligente focada em **estudo bíblico e análise de sentimentos**.
A proposta é oferecer uma experiência semelhante a uma conversa pastoral: o usuário escreve livremente, e a IA responde de forma acolhedora enquanto identifica o estado emocional da mensagem.

---

## ✨ Demonstração

O usuário pode conversar naturalmente:

> "Hoje estou muito ansioso com o futuro..."

<img width="1721" height="1049" alt="image" src="https://github.com/user-attachments/assets/2b40aefe-4edb-4237-a0c9-5f56c4d29691" />

A aplicação:

* interpreta o sentimento
* responde de forma empática
* usará textos bíblicos como apoio
* permite anexar imagens ou arquivos para análise

---

## 🚀 Funcionalidades

* 💬 Chat em tempo real com IA
* ❤️ Análise de sentimento da mensagem
* 📖 Respostas baseadas em contexto bíblico
* 🌙 Tema claro e escuro
* 📷 Foto pela webcam
* 📎 Upload de arquivos
* 🧠 Respostas empáticas (estilo aconselhamento)
* ⏳ Indicador de "digitando..."

---

## 🛠️ Tecnologias Utilizadas

**Backend**

* Python
* Django
* Processamento de linguagem natural (NLP)
* GenAI

**Frontend**

* HTML5
* CSS3
* Bootstrap 5
* Bootstrap Icons
* JavaScript

**Outros**

* API de IA (LLM - Ollama)
* Análise de sentimento
* Manipulação de arquivos

---

## ⚙️ Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/jackson-fidelix/seed-ai.git
cd seed-ai
```

Crie um ambiente virtual:

```bash
python -m venv venv
source venv/bin/activate   # Linux / Mac
venv\Scripts\activate      # Windows
```

Instale as dependências:

```bash
pip install -r requirements.txt
```

Execute as migrações:

```bash
python manage.py migrate
```

Inicie o servidor:

```bash
python manage.py runserver
```

---

Abra no navegador:

```
http://127.0.0.1:8000/
```

---

## 📂 Estrutura do Projeto

```
seed-ai/
│── app/
│   ├── templates/
│   ├── static/
│   ├── views.py
│   ├── urls.py
│
│── seed/
│── manage.py
│── requirements.txt
```

---

👨‍💻 Autor

Desenvolvido por Jackson Fidelix

Projeto criado para aprendizado em IA aplicada à experiência humana e espiritual.
