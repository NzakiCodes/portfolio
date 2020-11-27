import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
export default function Projects() {
  return (
    <Layout pageTitle="Projects" navActive="projects">
      <h1>Projects</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
    </Layout>
  )
}
