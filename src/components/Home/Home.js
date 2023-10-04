import React from 'react';
import classes from "./Home.module.css";

const Home = () => {
    return (
        <div className={classes.content}>
            <div className={classes.mint}>
                Welcome to Tic Tac Toe App! Click "Play Tic Tac Toe" to start the game.
            </div>
        </div>
    );
};

export default Home;
