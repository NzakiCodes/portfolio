import { gql, useQuery } from '@apollo/client';
import { PostCard } from "../components/cards";
import styles from '../styles/util.module.css';
const BLOG_POST = gql`  query{
    user(username:"NzakiCodes"){
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
    // loading && ;
    // error && ;

    return (
        <div className={styles.flexRow}>
            {
                loading ? <h1>Loading...</h1> : (error ? <h1>Error!!!</h1> :
                    data.user.publication.posts.map((post) => (
                        <PostCard key={post._id} post={post} />
                    )))
            }
        </div>
    )

}

export default BlogPosts;