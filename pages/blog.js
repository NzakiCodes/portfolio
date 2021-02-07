import Layout from '../components/layout';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import BlogPosts from '../components/blogPost'
const client = new ApolloClient({
    uri: 'https://api.hashnode.com/',
    headers: {
        "Authorization": "119fa277-1046-4e95-bbcc-6004726fad96"
    },
    cache: new InMemoryCache()
});


// client.query({ query: BLOG_POST }).then(res => console.log(res.data));


export default function Blog() {
    return (
        <ApolloProvider client={client}>
            <Layout pageTitle="Blog" navActive="blog">
                <h1>Blog</h1>
                <BlogPosts/>
            </Layout>
        </ApolloProvider>
    )
}
