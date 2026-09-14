
export default function GameBoard({ onSelectSquare, board }) {
    return (        
        <ol id="game-board" className="game-board">
            {board.map((row, rowIndex) =>(
              <li key={rowIndex} className="game-board-row">
                <ol>
                    {row.map((playerSybol, colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} 
                            disabled={playerSybol !== null}> 
                                {playerSybol}                                
                            </button>
                        </li>
                    ))}
                </ol>
              </li>  
            )
        )}
        </ol>
    );
}