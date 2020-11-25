import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
export default function Home() {
  return (
    <Layout pageTitle="Home">
        <h1>Home</h1>

      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}
