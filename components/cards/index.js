import styles from '../../styles/card.module.css';

export const ImageCard = ({ image }) => {
    return (
        <div className={styles.card}>
            <img src={image} alt="" />
        </div>
    )
}
export const PostCard = ({ post:{title, coverImage:imageSrc, title:imageAlt, link} }) => (
    <div className={styles.card}>
        {console.log(title)}
        <a href={link}>
            <img src={imageSrc} alt={imageAlt} />
            {/* <h4>
                {title}
            </h4> */}
        </a>
    </div>
)