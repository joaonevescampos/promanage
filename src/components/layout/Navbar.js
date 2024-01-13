<<<<<<< HEAD
import { Link } from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'

=======
import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../img/costs_logo.png'
>>>>>>> 01ea8ba (atualização)
const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <Container>
<<<<<<< HEAD
                <Link to="/">
                    <img src={logo} alt='promanage' />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/company">Empresa</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={styles.item}>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
            
=======
                <Link to='/'>
                    <img src={logo} alt="Pro Manage" />
                </Link>
                <ul className={styles.list}>
                    <li className={styles.item}> <Link to="/">Home</Link></li>
                    <li className={styles.item}> <Link to="/projects">Projetos</Link></li>
                    <li className={styles.item}> <Link to="/company">Empresa</Link></li>
                    <li className={styles.item}> <Link to="/contacts">Contato</Link></li>
                </ul>
            </Container>
>>>>>>> 01ea8ba (atualização)
        </nav>
    )
}

export default Navbar