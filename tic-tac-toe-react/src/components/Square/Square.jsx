import './Square.css'

// cada casa so mostra o valor e avisa o board quando for clicada
function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}

export default Square
