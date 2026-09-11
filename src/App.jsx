import Player from "./components/Player.jsx";
import GameDashboard from "./components/GameBoard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player 1" symbol="X" />
          <Player initialName="Player 2" symbol="O" />
        </ol>
        <GameDashboard/>
      </div>
    </main>

  )
}

export default App
