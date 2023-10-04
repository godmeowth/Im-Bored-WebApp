import React, { useState, useEffect, useCallback } from 'react';
import classes from "./Snake.module.css";

const SnakeGame = () => {
    const [snake, setSnake] = useState([[0, 0]]);
    const [food, setFood] = useState([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
    const [dir, setDir] = useState('RIGHT');

    const moveSnake = useCallback(() => {
        let newSnake = [...snake];
        let head = [...newSnake[0]];

        switch (dir) {
            case 'RIGHT':
                head[0]++;
                break;
            case 'LEFT':
                head[0]--;
                break;
            case 'UP':
                head[1]--;
                break;
            case 'DOWN':
                head[1]++;
                break;
            default:
                break;
        }

        newSnake.unshift(head);

        if (head[0] === food[0] && head[1] === food[1]) {
            setFood([Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]);
        } else {
            newSnake.pop();
        }

        setSnake(newSnake);
    }, [dir, snake, food]);

    useEffect(() => {
        const interval = setInterval(moveSnake, 200);
        return () => clearInterval(interval);
    }, [moveSnake]);

    const handleKeyPress = (e) => {
        switch (e.key) {
            case 'ArrowUp':
                if (dir !== 'DOWN') setDir('UP');
                break;
            case 'ArrowDown':
                if (dir !== 'UP') setDir('DOWN');
                break;
            case 'ArrowLeft':
                if (dir !== 'RIGHT') setDir('LEFT');
                break;
            case 'ArrowRight':
                if (dir !== 'LEFT') setDir('RIGHT');
                break;
            default:
                break;
        }
    };

    return (
        <div className={classes.snakeGame} tabIndex="0" onKeyDown={handleKeyPress}>
            <div className={classes.snakeGrid}>
                {Array.from({ length: 20 }).map((_, rowIndex) => (
                    <div className={classes.snakeRow} key={rowIndex}>
                        {Array.from({ length: 20 }).map((_, colIndex) => (
                            <div
                                key={colIndex}
                                className={`${classes.snakeCell} ${
                                    snake.some(([x, y]) => x === colIndex && y === rowIndex) ? classes.snake : ''
                                } ${food[0] === colIndex && food[1] === rowIndex ? classes.food : ''}`}
                            ></div>
                        ))}
                    </div>
                ))}
            </div>
            test text
        </div>
    );
};

export default SnakeGame;