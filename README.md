# Guia do Menzinho

Projeto Next.js configurado para deploy na Vercel.

## 🚀 Começando

### Pré-requisitos

- Node.js 18+ 
- pnpm (gerenciador de pacotes)

### Instalação

```bash
# Instalar dependências
pnpm install

# Executar em desenvolvimento
pnpm dev

# Build para produção
pnpm build

# Executar em produção
pnpm start
```

## 📁 Estrutura do Projeto

```
├── src/
│   ├── app/              # App Router do Next.js
│   │   ├── layout.tsx    # Layout principal
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais
│   ├── components/       # Componentes React
│   └── services/         # Serviços e APIs
├── public/               # Arquivos estáticos
├── next.config.js        # Configuração do Next.js
├── tailwind.config.ts    # Configuração do Tailwind CSS
└── tsconfig.json         # Configuração do TypeScript
```

## 🚢 Deploy na Vercel

1. Conecte seu repositório à Vercel
2. A Vercel detectará automaticamente o Next.js
3. Configure as variáveis de ambiente se necessário
4. Deploy automático a cada push!

## 🛠️ Tecnologias

- **Next.js 15** - Framework React
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Radix UI** - Componentes acessíveis
- **next-themes** - Suporte a temas claro/escuro

## 📝 Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm start` - Inicia servidor de produção
- `pnpm lint` - Executa o linter
- `pnpm check` - Verifica tipos TypeScript
- `pnpm format` - Formata código com Prettier

