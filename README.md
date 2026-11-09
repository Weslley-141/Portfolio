# 🌴 Portfólio Vaporwave

Portfólio pessoal de **Weslley Eugênio**, desenvolvedor de sistemas com foco em front-end, construído com **Next.js, TypeScript e Tailwind CSS** em uma estética inspirada no Vaporwave.

A página inteira funciona como uma esteira lateral: o scroll vertical é convertido em movimento horizontal, conduzindo a navegação pelas seções **Hero, Projetos e Contato**.

> **Contexto do repositório:** esta é a nova versão do meu portfólio, redesenhada do zero com uma identidade vaporwave, substituindo a versão anterior de estética terminal/cyber.

---

## ✨ Funcionalidades

### 🧭 Navegação lateral

- Scroll vertical convertido em movimento horizontal, com movimento suavizado por mola
- Botões de anterior/próximo com contador de seções
- Atalhos de teclado com as setas `←` e `→`
- Botões do Hero que navegam diretamente para cada seção
- Layout vertical empilhado em telas pequenas, abaixo de `768px`

### 🌅 Hero

- Apresentação com título cromado e cartão "Sobre mim"
- Cubo 3D girando, construído exclusivamente com CSS
- Busto de estátua com efeito de glitch VHS, faixas e aberração cromática
- Sol listrado construído em SVG

### 📁 Projetos

- Projetos organizados por categorias: **Web, Desktop, Mobile e Acadêmico**
- Cards em vidro neon com categoria, contador, tecnologias e links
- Dados dos projetos tipados e separados da interface

### 📬 Contato

- Quatro canais de contato: **LinkedIn, e-mail, WhatsApp e GitHub**
- WhatsApp com mensagem inicial pré-preenchida
- E-mail com abertura direta da tela de composição do Gmail, com alternativa para aplicativo de e-mail
- Canais sem link configurado aparecem como **"em breve"**

### 🎨 Visual e acessibilidade

- Vídeo de fundo em loop, desfocado e escurecido
- Grid neon em perspectiva e scanlines
- Painéis de vidro translúcido com brilho neon
- Suporte a `prefers-reduced-motion`
- Em modo de movimento reduzido, o vídeo é substituído por uma imagem estática e os efeitos de movimento são desativados

---

## 🛠️ Tecnologias

- **Next.js** — App Router
- **React**
- **TypeScript**
- **Tailwind CSS 4**
- **Motion** — `motion/react`
- **React Icons**
- **next/font** — Orbitron e Space Grotesk

---

## 🏗️ Estrutura

```text
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── globals.css
│   └── icon.svg
│
├── components/
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── AboutCard.tsx
│   ├── Cube.tsx
│   ├── HorizontalScroll.tsx
│   ├── ProjectCard.tsx
│   ├── Scanlines.tsx
│   ├── StatueSlot.tsx
│   ├── Sun.tsx
│   ├── VaporGrid.tsx
│   └── VideoBackground.tsx
│
├── data/
│   ├── projects.ts     # Projetos e grupos
│   └── contact.ts      # Links de contato
│
└── public/
    ├── images/         # Estátua do Hero
    └── videos/         # Vídeo de fundo e poster
```

---

## 🚀 Executando localmente

### Pré-requisitos

- Node.js `20.9` ou superior
- npm

### 1. Instale as dependências

```bash
npm install
```

### 2. Inicie o servidor de desenvolvimento

```bash
npm run dev
```

Abra:

```text
http://localhost:3000
```

> Em modo de desenvolvimento, o Next.js restringe alguns recursos de desenvolvimento a origens permitidas. Ao acessar por outro endereço, como o IP da rede local, a página pode carregar apenas o HTML e o scroll lateral deixar de funcionar.
>
> Para liberar outra origem, configure `allowedDevOrigins` no `next.config.ts`.

### 3. Build de produção

```bash
npm run build
npm start
```

Também existe o comando:

```bash
npm run lint
```

para verificar o código com o ESLint.

---

## ⚙️ Configuração dos dados

Todo o conteúdo que muda com frequência fica centralizado em `data/`:

- **`data/projects.ts`** — grupos e projetos exibidos na seção de Projetos
- **`data/contact.ts`** — links e informações de contato

No `contact.ts`, o WhatsApp deve conter apenas dígitos, incluindo DDI e DDD:

```ts
export const contact = {
  github: 'https://github.com/usuario',
  linkedin: 'https://www.linkedin.com/in/usuario/',
  whatsapp: '5581999999999',
  email: 'email@exemplo.com',
};
```

Um canal deixado vazio aparece como **"em breve"**, sem gerar links quebrados.

---

## ☁️ Deploy

O projeto está pronto para deploy na **Vercel**, sem necessidade de variáveis de ambiente.

---

## 👨‍💻 Autor

**Weslley Eugênio**

- GitHub: [Weslley-141](https://github.com/Weslley-141)
- Portfólio: **[seu link aqui]**

---

## 📄 Licença

Este projeto é um portfólio pessoal e foi desenvolvido para apresentação profissional e demonstração de projetos.