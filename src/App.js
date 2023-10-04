import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import TicTacToeGame from './components/TicTac/TicTacToe';
import Home from '././components/Home/Home';
import styles from './App.module.css';
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
      <Router>
        <div className={styles.container}>
          <Navbar />
          <div className={styles.gameContainer}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/game" element={<TicTacToeGame />} />
            </Routes>
          </div>
        </div>
      </Router>
  );
};

export default App;
