import classes from './Navbar.module.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
            <ul className={classes.menuBar}>
                <li>
                    <Link to='/movies'>Movies</Link>
                </li>
                <li>
                    <Link to='/favourite'>Favourite</Link>
                </li>
            </ul>
    );
}

export default NavBar;
