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

                <div>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/projects">
                                <a>Projects</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <a>Blog</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact">
                                <a>Contact</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}