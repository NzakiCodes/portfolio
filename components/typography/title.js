import styles from '../../styles/typography.module.css';
import { motion } from 'framer-motion';

export const Title = ({ children }) => (
    <h1 className={styles.title}>
        {children}
        <motion.span initial={{  width: 0 }} animate={{width: '100%'}} transition={{duration: 0.4}} className={styles.titleBorder}></motion.span>
    </h1>
);