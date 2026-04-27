# Ideias de Design para Kotrac Moderno

## Conceito Escolhido: Modern Industrial Elegance

### Design Movement
**Neo-Modernismo Industrial** - Combina a precisão e funcionalidade do design industrial com a elegância minimalista contemporânea. Inspirado em marcas de engenharia e tecnologia de ponta que valorizam clareza, confiabilidade e sofisticação.

### Core Principles
1. **Precisão Técnica** - Cada elemento tem propósito claro; linhas definidas, espaçamento preciso, hierarquia visual impecável
2. **Confiabilidade Transmitida** - Paleta de cores sóbria e profunda que comunica expertise e segurança
3. **Elegância Funcional** - Sem ornamentação desnecessária; beleza emerge da forma e proporção
4. **Movimento Inteligente** - Animações sutis que reforçam interatividade sem distrair do conteúdo

### Color Philosophy
- **Primária:** Laranja Profundo (#FF6B00 → #E85D00) - Energia, confiabilidade, expertise técnica
- **Secundária:** Grafite Escuro (#1A1A1A) - Solidez, profissionalismo, foco
- **Terciária:** Cinza Refinado (#F5F5F5, #E8E8E8) - Respiro visual, clareza
- **Acentos:** Azul Escuro (#1E3A5F) - Confiança, tecnologia, contraste sofisticado
- **Textos:** Preto Profundo (#0F0F0F) em fundo claro; Branco (#FAFAFA) em fundo escuro

**Intenção Emocional:** Transmitir expertise técnica, confiabilidade de 40 anos, e modernidade sem perder a seriedade do negócio.

### Layout Paradigm
- **Hero Section:** Assimétrico com imagem de componente hidráulico (gerada) à direita, texto e CTA à esquerda. Uso de clip-path para corte diagonal elegante.
- **Seções de Conteúdo:** Grid 2-3 colunas com cartões flutuantes (subtle shadow, hover lift). Alternância de alinhamento (texto esquerda/imagem direita, depois inverso).
- **Timeline de História:** Vertical com conectores visuais, marcos destacados com ícones geométricos.
- **Serviços:** Grid 3 colunas (desktop) com cartões que expandem ao hover, revelando mais detalhes.
- **Galeria:** Masonry layout com overlays de categoria ao hover.

### Signature Elements
1. **Linhas Geométricas Sutis** - Separadores diagonais entre seções (SVG dividers com ângulos 5-8°)
2. **Ícones Hexagonais** - Cada serviço marcado com ícone em hexágono (geometria industrial)
3. **Cartões com Borda Esquerda Colorida** - Faixa vertical laranja/azul na esquerda dos cartões de serviço

### Interaction Philosophy
- **Hover States:** Cartões levantam com sombra maior, cor de fundo muda sutilmente, ícone rotaciona levemente
- **Scroll Animations:** Elementos entram suavemente (fade-in + slide-up) conforme scroll
- **Botões:** Transição de cor suave, ícone se move (arrow slides right on hover)
- **Formulário:** Campos com underline animado (laranja) ao foco, validação com ícone de check

### Animation Guidelines
- **Duração Base:** 300-400ms para transições, 600-800ms para entrada de seções
- **Easing:** `cubic-bezier(0.25, 0.46, 0.45, 0.94)` para movimento natural
- **Scroll Trigger:** Elementos animam quando entram 30% no viewport
- **Parallax Leve:** Hero section com movimento Y leve (5-10px) no scroll
- **Pulse Sutil:** Botão CTA com pulse suave (opacity 0.8 → 1.0) a cada 2s

### Typography System
- **Display (Títulos Principais):** `Poppins Bold 700` - Peso forte, presença marcante, 48-56px desktop
- **Heading (Subtítulos):** `Poppins SemiBold 600` - 28-36px, mantém força sem ser pesado
- **Body (Corpo):** `Inter Regular 400` - Legibilidade máxima, 16px base
- **Accent (Destaque):** `Inter SemiBold 600` - Para destaques dentro do corpo
- **Labels/UI:** `Inter Medium 500` - 14px, para formulários e labels

**Hierarquia:**
- H1: 56px / 1.2 line-height / Poppins Bold
- H2: 36px / 1.3 line-height / Poppins SemiBold
- H3: 24px / 1.4 line-height / Poppins SemiBold
- Body: 16px / 1.6 line-height / Inter Regular
- Small: 14px / 1.5 line-height / Inter Regular

---

## Paleta de Cores Detalhada

| Uso | Cor | Hex | OKLCH |
|-----|-----|-----|-------|
| Laranja Primário | Laranja Vibrante | #FF6B00 | oklch(0.62 0.21 29) |
| Laranja Hover | Laranja Escuro | #E85D00 | oklch(0.58 0.20 29) |
| Grafite Escuro | Fundo Escuro | #1A1A1A | oklch(0.11 0.01 0) |
| Cinza Claro | Fundo Secundário | #F5F5F5 | oklch(0.97 0 0) |
| Cinza Médio | Bordas | #E8E8E8 | oklch(0.93 0 0) |
| Azul Escuro | Acentos | #1E3A5F | oklch(0.32 0.07 260) |
| Preto Profundo | Texto Principal | #0F0F0F | oklch(0.06 0.01 0) |
| Branco | Texto em Escuro | #FAFAFA | oklch(0.99 0 0) |

---

## Componentes Principais

### 1. Hero Section
- Fundo: Gradiente sutil (Grafite → Cinza Escuro)
- Imagem: Componente hidráulico gerado à direita com clip-path diagonal
- Texto: Poppins Bold, laranja + branco, com tagline em Inter
- CTA: Botão laranja com hover (mais escuro) + botão outline branco

### 2. Cartão de Serviço
- Fundo: Branco com sombra sutil (0 4px 12px rgba(0,0,0,0.08))
- Borda Esquerda: Faixa 4px laranja
- Ícone: Hexágono com ícone interno, 48x48px
- Título: Poppins SemiBold 24px
- Descrição: Inter Regular 16px, cinza escuro
- Hover: Levanta (+8px shadow), fundo muda para cinza claro

### 3. Timeline de História
- Conectores: Linha vertical com círculos nos marcos
- Marcos: Alternância esquerda/direita com datas em laranja
- Descrição: Texto alinhado ao lado do círculo
- Ícones: Geométricos (triângulo, quadrado, estrela) em laranja

### 4. Formulário de Contato
- Campos: Border-bottom apenas (underline style)
- Focus: Underline muda para laranja com animação
- Validação: Ícone de check em verde
- Botão: Laranja com hover mais escuro, texto branco

### 5. Galeria
- Layout: Masonry 3 colunas
- Overlay: Categoria em branco sobre fundo laranja semi-transparente
- Hover: Overlay desliza para cima, revela descrição

---

## Implementação Técnica

- **Framework:** React 19 + Tailwind CSS 4
- **Ícones:** Lucide React (hexágonos customizados com SVG)
- **Animações:** Framer Motion para scroll triggers e hover states
- **Fonts:** Google Fonts (Poppins + Inter)
- **Imagens:** Geradas com generate_image para hero e componentes técnicos

---

## Diferenciais da Versão Melhorada

✅ Design elegante e refinado vs. design funcional básico
✅ Animações suaves e interatividade vs. estático
✅ Tipografia sofisticada (Poppins + Inter) vs. sans-serif genérico
✅ Paleta de cores harmoniosa vs. cores isoladas
✅ Componentes com profundidade (sombras, gradientes) vs. flat design
✅ Layout assimétrico e dinâmico vs. layout centrado simples
✅ Responsividade refinada vs. apenas responsivo
