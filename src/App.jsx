import Player from "./components/Player.jsx";
import GameDashboard from "./components/GameBoard.jsx";
import Log from './components/Log.jsx';
import { useState } from "react";

function App() {
  const[gameTurn, setGameTurn] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquare(rowIndex, colIndex) {   
    setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
     setGameTurn((prevGameTurn) =>{
      let currentPlayer = 'X';

      if(prevGameTurn.length > 0 && prevGameTurn[0].player === 'X'){
        currentPlayer = 'O';
      }

      const updatedGameTurn = [
        {square:{row: rowIndex, col: colIndex}, player: currentPlayer}, 
        ...prevGameTurn
      ];

      return updatedGameTurn;
     });
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} />
        </ol>
        <GameDashboard onSelectSquare={handleSelectSquare} turns={gameTurn} />
      </div>
      <Log message={`Next player: ${gameTurn}`} />
    </main>

  )
}

export default App
