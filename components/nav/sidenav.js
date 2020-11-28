import styles from '../../styles/sidenav.module.css';
import utils from '../../styles/util.module.css';
import Avatar from '../avatar';
import { motion } from 'framer-motion'
import Link from 'next/link';
export default function Sidenav({ active, ...props }) {
    return (
        <div {...props}>
            <div className={styles.sidenavContainer}>
                <div className={utils.centerDiv} >
                    <Avatar className={styles.avatarRound} src="/images/my_avatar_192x192.png" />
                </div>

                <div className={styles.sideLinks}>
                    <Link href="/about">
                        <a className={active=="about"?styles.active:""} >About</a>
                    </Link>
                    <Link href="/projects">
                        <a className={active=="projects"?styles.active:""}>Projects</a>
                    </Link>
                    <Link href="/blog">
                        <a className={active=="blog"?styles.active:""}>Blog</a>
                    </Link>
                    <Link href="/contact">
                        <a className={active=="contact"?styles.active:""}>Contact</a>
                    </Link>
                </div>
            </div>
        </div>
    )
}