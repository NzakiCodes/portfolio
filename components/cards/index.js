import styles from '../../styles/card.module.css';

export const ImageCard = ({ image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
        </div>
    )
}
export const PostCard = ({ post:{title, coverImage:imageSrc, title:imageAlt, slug},url }) => (
    <div className={styles.card}>
       
        <a href={`https://${url}/${slug}`}>
            <img src={imageSrc} alt={imageAlt} />
            {/* <h4>
                {title}
            </h4> */}
        </a>
    </div>
)