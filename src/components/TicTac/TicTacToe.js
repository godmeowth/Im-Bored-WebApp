import React, { useState } from 'react';
import './TicTacToe.css'

const initialBoard = Array(9).fill(null);

const TicTacToeGame = () => {
    const [board, setBoard] = useState(initialBoard);
    const [isXNext, setIsXNext] = useState(true);

    const calculateWinner = (squares) => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    };

    const handleClick = (i) => {
        const squares = [...board];
        if (calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = isXNext ? 'X' : 'O';
        setBoard(squares);
        setIsXNext(!isXNext);
    };

    const renderSquare = (i) => {
        const isWinner = calculateWinner(board) && calculateWinner(board).includes(i);
        return (
            <button className={`square ${isWinner ? 'square-winner' : ''}`} onClick={() => handleClick(i)}>
                {board[i]}
            </button>
        );
    };

    const restartGame = () => {
        setBoard(initialBoard);
        setIsXNext(true);
    };

    const winner = calculateWinner(board);
    const status = winner ? <span className="winner-message">Winner is: {winner}</span> : `Next player: ${isXNext ? 'X' : 'O'}`;


    return (
        <div className="game">
            <div className="game-board">
                <div className="board-row">
                    {renderSquare(0)}
                    {renderSquare(1)}
                    {renderSquare(2)}
                </div>
                <div className="board-row">
                    {renderSquare(3)}
                    {renderSquare(4)}
                    {renderSquare(5)}
                </div>
                <div className="board-row">
                    {renderSquare(6)}
                    {renderSquare(7)}
                    {renderSquare(8)}
                </div>
            </div>
            <div className="game-info">
                <div>{status}</div>
                <button onClick={restartGame}>Restart Game</button>
            </div>
        </div>
    );
};

export default TicTacToeGame;
