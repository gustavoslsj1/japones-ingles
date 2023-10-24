import { Link } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = ()=> {
    return(
        <nav>
            <Link to="/" className={styles.linkHome} >Home</Link>
            <Link to="/Japones" className={styles.linkJapones} >japones</Link>
            <Link to="/Ingles" className={styles.linkIngles} >ingles</Link>
        </nav>
    )
}

export default Navbar