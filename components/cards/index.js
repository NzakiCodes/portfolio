import styles from '../../styles/card.module.css';

export const ImageCard = ({image})=>{
    return(
        <div className={styles.card}>
            <img src={image} alt="" />
        </div>
    )
}