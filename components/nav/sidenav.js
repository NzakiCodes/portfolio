import styles from '../../styles/sidenav.module.css';
import utils from '../../styles/util.module.css';
import Avatar from '../avatar';
import { motion } from 'framer-motion'
import Link from 'next/link';
import Icon from '../../components/icons'


export default function Sidenav({ active, ...props }) {
    const avatarStyle = `${styles.avatarRound} ${active == "home" ? styles.avatarActive : ""}`;
    return (
        <div {...props}>
            <div className={styles.sidenavContainer}>
                <div className={utils.centerDiv} >
                    <motion.div
                        whileHover={{
                            scale: 1.2
                        }}
                        whileTap={{
                            scale: 1.3
                        }}
                        transition={{
                            duration: 1
                        }}
                    >
                        <Link href="/">
                            <a>
                                <Avatar className={avatarStyle} src="/images/my_avatar_192x192.png" />
                            </a>
                        </Link>
                    </motion.div>
                </div>

                <div className={styles.sideLinks}>
                    <Link href="/about">
                        <a className={active == "about" ? styles.active : ""} >About</a>
                    </Link>
                    <Link href="/projects">
                        <a className={active == "projects" ? styles.active : ""}>Projects</a>
                    </Link>
                    <Link href="/blog">
                        <a className={active == "blog" ? styles.active : ""}>Blog</a>
                    </Link>
                    <Link href="/contact">
                        <a className={active == "contact" ? styles.active : ""}>Contact</a>
                    </Link>
                </div>
                <div className={`${styles.socialLinks} ${utils.container}`}>
                    <Icon size="small" link="https://github.com/NzakiCodes" name="github" type="brand" />
                    <Icon size="small" link="https://twitter.com/NzakiCodes" name="twitter" type="brand" />
                    <Icon size="small" link="http://instagram.com/nzakicodes" name="instagram" type="brand" />
                    <Icon size="small" link="https://facebook.com/NzakiCodes" name="facebook" type="brand" />
                </div>
            </div>
        </div>
    )
}