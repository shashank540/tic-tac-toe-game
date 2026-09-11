
const initialGameBoard = [
    [null, null, null],
    [null, null, null],
    [null, null, null]
];

export default function GameBoard({ onSelectSquare, turns }) {
    let gameBoard = initialGameBoard;

    for(const turn of turns){
        const {square, player} = turn;
        const {row, col} = square;

        gameBoard[row][col] = player;
    }

    // const [gameBoard, setGameBoard] = useState(initialGameBoard);

    // function handleCellClick(rowIndex, colIndex) {
    //     setGameBoard((prevGameBoard) =>{
    //         const newGameBoard = [...prevGameBoard.map(innerArray => [...innerArray])];
    //         newGameBoard[rowIndex][colIndex] = activePlayerSymbol;
    //         return newGameBoard;                
    //     });
    //     onSelectSquare();
    // }

    return (        
        <ol id="game-board" className="game-board">
            {gameBoard.map((row, rowIndex) =>(
              <li key={rowIndex} className="game-board-row">
                <ol>
                    {row.map((playerSybol, colIndex)=>(
                        <li key={colIndex}>
                            <button onClick={() => onSelectSquare(rowIndex, colIndex)} > {playerSybol}
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