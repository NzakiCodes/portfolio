import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Blog() {
    return (
        <Layout pageTitle="Blog" navActive="blog">
            <h1>Blog</h1>
        </Layout>
    )
}
