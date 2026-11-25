import { useState } from 'react'
import Square from '../Square/Square'
import './Board.css'

function Board() {
  // as 9 casas comecam vazias e o x sempre comeca
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [xIsNext, setXIsNext] = useState(true)

  function handleClick(i) {
    // se a casa ja tem algo ou o jogo ja acabou, nao faz nada
    if (squares[i] || calculateWinner(squares)) {
      return
    }

    // copia o array pra nao mexer direto no estado
    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = 'X'
    } else {
      nextSquares[i] = 'O'
    }

    setSquares(nextSquares)
    setXIsNext(!xIsNext)
  }

  // volta tudo pro inicio
  function novoJogo() {
    setSquares(Array(9).fill(null))
    setXIsNext(true)
  }

  const winner = calculateWinner(squares)
  // deu velha quando ta tudo preenchido e ninguem ganhou
  const empate = !winner && squares.every((casa) => casa !== null)

  let status
  if (winner) {
    status = 'Vencedor: ' + winner
  } else if (empate) {
    status = 'Empate'
  } else {
    status = 'Próximo jogador: ' + (xIsNext ? 'X' : 'O')
  }

  return (
    <div className="board">
      <div className="status">{status}</div>

      <div className="grade">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>

      <button className="btn-novo-jogo" onClick={novoJogo}>
        Novo Jogo
      </button>
    </div>
  )
}

// verifica as 8 formas de ganhar (3 linhas, 3 colunas e 2 diagonais)
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }

  return null
}

export default Board
