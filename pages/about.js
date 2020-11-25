import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'

export default function Home() {
    return (
        <Layout pageTitle="About" navActive="about">
            <h1>About Me</h1>
            <Link href="/">Home</Link>  
        </Layout>
    )
}
