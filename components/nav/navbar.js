import styles from '../../styles/navbar.module.css';

export default function Navbar(){
    return(
        <nav className={styles.nav}>
            <img src="/icons/handoff.svg" alt="" />
            {/* <img src="/images/my_avatar_192x192.png" alt="" /> */}
        </nav>
    )
}