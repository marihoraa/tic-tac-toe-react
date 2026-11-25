# Jogo da Velha em React

Projeto feito para a disciplina de Frontend Frameworks. É um jogo da velha para dois jogadores, rodando no navegador, desenvolvido a partir do que fizemos em sala.

O jogo começa sempre com o X, alterna as jogadas entre X e O, não deixa jogar numa casa que já está ocupada e mostra quando alguém ganha ou quando dá empate. O botão "Novo Jogo" limpa o tabuleiro e recomeça a partida.

## Captura de tela

![Jogo da velha funcionando](captura.png)

## Tecnologias

- React
- JavaScript
- JSX
- CSS
- Fonte Press Start 2P (pacote @fontsource)
- Vite

## Pré-requisitos

- Node.js (versão 20 ou mais recente)
- npm

## Como rodar o projeto

Clone o repositório:

```bash
git clone https://github.com/SEU-USUARIO/tic-tac-toe-react.git
cd tic-tac-toe-react
```

Instale as dependências:

```bash
npm install
```

Inicie a aplicação:

```bash
npm run dev
```

Depois é só abrir no navegador o endereço que aparecer no terminal (normalmente http://localhost:...).

## Estrutura

- `Board` guarda o estado do tabuleiro e controla as regras do jogo (vez do jogador, vitória, empate e reinício).
- `Square` representa uma casa e recebe por props o valor que vai mostrar e a função de clique.

## Aluna

Maria Eduarda Cavalcante Hora - 01603709
