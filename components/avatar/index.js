import styles from '../../styles/avatar.module.css';
const Avatar = ({ src, ...props }) => {
    console.log({...props})
    return (
        <div {...props}>
            
            <img className={styles.avatar} src={src} alt={src} />
        </div>
    )
};
export default Avatar;