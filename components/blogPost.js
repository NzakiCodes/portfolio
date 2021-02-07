import { gql, useQuery } from '@apollo/client';
import { motion } from 'framer-motion';
import { PostCard } from "../components/cards";
import styles from '../styles/util.module.css';

const BLOG_POST = gql`  query{
    user(username:"NzakiCodes"){
    publicationDomain
      publication{
        posts{
          _id
          title
          coverImage
          slug
        }
      }
    }
  }
`;

const BlogPosts = () => {
    const { loading, data, error } = useQuery(BLOG_POST);
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    }

    const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    }
    return (
        <motion.div variants={container} initial="hidden" animate="visible" className={styles.flexRow}>
            {
                loading ? <h1>Loading...</h1> : (error ? <h1>Error!!!</h1> :
                    data.user.publication.posts.map((post) => (
                        <motion.div className="item" variants={item} key={post._id} >
                            <PostCard post={post} url={data.user.publicationDomain} />
                        </motion.div>
                    )))
            }
        </motion.div>
    )

}

export default BlogPosts;