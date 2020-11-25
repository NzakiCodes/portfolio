import styles from '../../styles/sidenav.module.css';
import utils from '../../styles/util.module.css';
import Avatar from '../avatar';
import { motion } from 'framer-motion'
import Link from 'next/link';
export default function Sidenav({ active, ...props }) {
    return (
        <div {...props}>
            <div className={styles.sidenavContainer}>
                <motion.div className={utils.centerDiv} initial={{
                    x:0,
                    y:0,
                }}>
                    <Avatar className={styles.avatarRound} src="/images/my_avatar_192x192.png" />
                </motion.div>

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