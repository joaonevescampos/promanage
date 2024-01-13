import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <ul className={styles.social_list}>
        <li><FaFacebook /></li>
        <li><FaInstagram /></li>
        <li><FaLinkedin /></li>
      </ul>
      <p><span className={styles.copy_right}>Pro Manage</span> &copy; Todos Diretos Reservados - 2024</p>
    </footer>
  )
}

export default Footer