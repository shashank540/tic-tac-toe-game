import { useState } from "react";    
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard() {
    const [gameBoard, setGameBoard] = useState(initialGameBoard);

    function handleCellClick(rowIndex, colIndex) {
        setGameBoard((prevGameBoard) =>{
            const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
            newGameBoard[rowIndex][colIndex] = 'X';
            return newGameBoard;                
        });
    }

    return (        
        <ol id="game-board" className="game-board">
            {gameBoard.map((row, rowIndex) =>(
              <li key={rowIndex} className="game-board-row">
                <ol>
                    {row.map((playerSybol, colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={() => handleCellClick(rowIndex, colIndex)}>
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