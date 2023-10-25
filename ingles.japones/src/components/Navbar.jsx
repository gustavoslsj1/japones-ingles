import { Link } from "react-router-dom";
import styles from '../css/Navbar.module.css';

const Navbar = ()=> {
    return(
        <nav>
            <Link to="/"  >Home</Link>
            <Link to="/Japones" className={styles.linkJapones} >japones</Link>
            <Link to="/Ingles" className={styles.linkIngles} >ingles</Link>
        </nav>
    )
}

export default Navbar