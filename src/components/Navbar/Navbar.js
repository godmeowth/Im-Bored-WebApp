import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <nav>
                <ul className={styles.list}>
                    <li className={styles.listItem}>
                        <NavLink to="/" className={styles.link} activeClassName={styles.activeLink}>
                            Home
                        </NavLink>
                    </li>
                    <li  className={styles.listItem}>
                        <NavLink to="/game" className={styles.link} activeClassName={styles.activeLink}>
                            Play Tic Tac Toe
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};
export default Navbar;
