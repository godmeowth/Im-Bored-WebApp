import React from 'react';
import {BrowserRouter as Router, Route, Routes, NavLink} from 'react-router-dom';
import TicTacToeGame from './TicTac/TicTacToe';
import styles from './App.module.css'

const Home = () => {
  return <div>Welcome to Tic Tac Toe App! Click "Play Tic Tac Toe" to start the game.</div>;
};

const App = () => {
  return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <NavLink to="/" className={styles.link} activeClassName={styles.activeLink}>Home</NavLink>
              </li>
              <li>
                <NavLink to="/game" className={styles.link} activeClassName={styles.activeLink}>Play Tic Tac Toe</NavLink>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/game" element={<TicTacToeGame />} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
