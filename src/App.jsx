import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Board from './components/Board'

const App = () => {
  const [xIsNext, setXIsNext] = useState(true)
  const [currentMove, setCurrentMove] = useState(0)
  const [history, setHistory] = useState([Array(9).fill(null)])
  const currentSquares = history[currentMove]

  const jumpTo = (nextMove) => {
      setCurrentMove(nextMove)
      setXIsNext(nextMove % 2 === 0)
  }

  const handlePlay = (nextSquares) => {
    const nextHistory = [...history.slice(0, currentMove +1), nextSquares]
    setHistory(nextHistory)
    setCurrentMove(nextHistory.length -1)
    setXIsNext(!xIsNext)
  }

  const moves = history.map((squares, move) => {
    let description = ''
    if(move > 0){
      description = 'Move To #' + move
    } else {
      description = 'Game Start'
    }

    return(
      <div>
        <li key={move}>
          <button className="border-2 p-1 m-1 border-gray-900 rounded bg-cyan-500" onClick={() => jumpTo(move)}>{description}</button>
        </li>
      </div>
      )
  })

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-2">Tic-Tac-Toe</h1>
      <div className="flex flex-wrap gap-2">
          <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>
          <ol>{moves}</ol>
      </div>
    </div>
  )
}

export default App
