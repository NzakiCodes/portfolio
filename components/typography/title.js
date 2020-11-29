import styles from '../../styles/typography.module.css';

export const Title = ({ children }) => (
    <h1 className={styles.title}>{children}</h1>
);