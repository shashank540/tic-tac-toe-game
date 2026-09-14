import Player from "./components/Player.jsx";
import GameDashboard from "./components/GameBoard.jsx";
import Log from './components/Log.jsx';
import GameOver from './components/GameOver.jsx';
import { useState } from "react";
import { WINNING_COMBINATIONS } from './winning-combinations.js';


const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

function deriveActivePlayer(turns) {
  let currentPlayer = 'X';

  if (turns.length > 0 && turns[0].player === 'X') {
    currentPlayer = 'O';
  }

  return currentPlayer;
}

function App() {
const [players, setPlayers] = useState({
  X: 'Player 1',
  O: 'Player 2'
});
  const [gameTurn, setGameTurn] = useState([]);
  const activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...initialGameBoard.map((array)=>[...array])];//deep copy of the initialGameBoard

  for(const turn of gameTurn){
      const {square, player} = turn;
      const {row, col} = square;

      gameBoard[row][col] = player;
  }

  let winner = null;

  for (const combination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[combination[0].row][combination[0].column];
    const secondSquareSymbol = gameBoard[combination[1].row][combination[1].column];
    const thirdSquareSymbol = gameBoard[combination[2].row][combination[2].column];

    if(firstSquareSymbol &&
       firstSquareSymbol === secondSquareSymbol &&
       firstSquareSymbol === thirdSquareSymbol
      ) {
        winner = players[firstSquareSymbol];
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    //setActivePlayer((currentPlayer) => currentPlayer === 'X' ? 'O' : 'X');
    setGameTurn((prevGameTurn) => {
      const currentPlayer = deriveActivePlayer(prevGameTurn);

      const updatedGameTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevGameTurn
      ];

      return updatedGameTurn;
    });
  }

  const isDraw = gameTurn.length === 9 && !winner;

  function handleRestart(){
    setGameTurn([]);
    console.log(initialGameBoard);
    console.log(gameBoard);
  }

  function handlePayerNameChange(playerSymbol, newName) {
    setPlayers((prevPlayers) => ({
      ...prevPlayers,
      [playerSymbol]: newName
    }));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player initialName="Player 1" symbol="X" isActive={activePlayer === 'X'} OnNameChange={handlePayerNameChange} />
          <Player initialName="Player 2" symbol="O" isActive={activePlayer === 'O'} OnNameChange={handlePayerNameChange} />
        </ol>
        {(winner || isDraw) && 
        (<GameOver OnRestart={handleRestart} winner={winner} />
      )}
        <GameDashboard onSelectSquare={handleSelectSquare} board={gameBoard} />
      </div>
      <Log turns={gameTurn} />
    </main>

  )
}

export default App
