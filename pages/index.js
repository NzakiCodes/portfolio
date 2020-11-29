import Link from 'next/link'
import Layout from '../components/layout'
import { Title } from '../components/typography'

export default function Home() {
  return (
    <Layout pageTitle="Home" navActive="home">
      <Title>Home</Title>
    </Layout>
  )
}
