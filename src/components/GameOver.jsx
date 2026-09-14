export default function GameOver({ winner, OnRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over!!</h2>
      {winner && <p>{winner} Won!!</p> }
      {!winner && <p>It's a tie!</p> }
      <p>
        <button onClick={OnRestart}>Restart!!</button>
      </p>      
    </div>
  )
}