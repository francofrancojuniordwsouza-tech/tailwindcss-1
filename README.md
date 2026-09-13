# Sabor & Arte

Landing page e site institucional responsivo para o restaurante Sabor & Arte, com identidade visual premium, cardápio interativo, reservas, contato e pedido online.

## Funcionalidades

- Página inicial com hero, chamada para reserva, promoção e avaliações.
- Cardápio com filtros por categoria.
- Página institucional sobre o restaurante.
- Página de contato com formulário e formas de pagamento.
- Página de reserva com data, horário, quantidade de pessoas e forma de pagamento.
- Página de pedido online com cálculo automático do total.
- Galeria em carrossel com navegação manual e automática.
- Menu responsivo para dispositivos móveis.
- Feedback visual nos formulários e nas opções selecionadas.

## Tecnologias utilizadas

- **HTML5**: estrutura semântica das páginas e formulários.
- **CSS3**: ajustes globais, responsividade complementar, animações e refinamentos visuais.
- **Tailwind CSS 4**: sistema principal de estilos utilitários, layout responsivo, cores, espaçamentos e estados de interação.
- **JavaScript vanilla**: menu mobile, modal de reserva, filtros do cardápio, carrossel, animações de entrada, cálculo do pedido e feedback dos formulários.
- **Node.js e npm**: gerenciamento das dependências e execução dos comandos do projeto.
- **Tailwind CSS CLI**: compilação de `css.css` para `dist/styles.css`.
- **PostCSS**: suporte ao pipeline de estilos.

## Estrutura principal

```text
.
├── index.html       # Página inicial
├── cardapio.html    # Cardápio completo com filtros
├── sobre.html       # História e valores do restaurante
├── contato.html     # Formulário de contato
├── reserva.html     # Formulário de reserva
├── pedido.html      # Pedido online e cálculo do total
├── script.js        # Interações da aplicação
├── css.css          # Entrada do Tailwind e estilos globais
├── dist/styles.css  # CSS compilado para uso no navegador
└── img/             # Imagens utilizadas no site
```

## Como executar localmente

1. Instale o Node.js (versão LTS recomendada).
2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o Tailwind em modo de desenvolvimento:

   ```bash
   npm run dev
   ```

4. Abra `index.html` no navegador ou use um servidor local, por exemplo:

   ```bash
   python -m http.server 8000
   ```

   Depois acesse `http://localhost:8000`.

## Build de estilos

Para gerar o CSS compilado uma vez:

```bash
npx @tailwindcss/cli -i ./css.css -o ./dist/styles.css
```

## Observação sobre pagamentos

As formas de pagamento (Pix, cartão e dinheiro) estão implementadas como seleção de interface. O projeto ainda não processa transações reais. Para produção, conecte o checkout a um provedor seguro, como Mercado Pago, Stripe ou PagSeguro, usando um backend e nunca expondo chaves secretas no navegador.

## Publicação

O projeto é estático e pode ser publicado em GitHub Pages, Netlify, Vercel ou qualquer servidor que entregue arquivos HTML, CSS, JavaScript e imagens.

## URL pública

Com o GitHub Pages habilitado, a publicação fica disponível em:

https://francofrancojuniordwsouza-tech.github.io/tailwindcss-1/
