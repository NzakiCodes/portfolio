import styles from '../../styles/card.module.css';

export default function Card({image}){
    return(
        <div className={styles.card}>
            <img src={image} alt="" />
            <div className={styles.card__container}>
                
            </div>
        </div>
    )
}