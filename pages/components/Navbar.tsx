import Image from 'next/image';
import styles from '../../styles/navbar.module.css'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.logoContainer}>
                <img className={styles['ohLogo']} src='/Images/ohLogo.webp' alt='ohLogo' />
            </div>

        </div>
    )
}

export default Navbar
