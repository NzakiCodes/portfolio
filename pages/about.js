import Head from 'next/head';
import Layout from '../components/layout';
import Link from 'next/link';
import { Title } from '../components/typography';


export default function Home() {
    return (
        <Layout pageTitle="About" navActive="about">
            <Title>About</Title>
        </Layout>
    )
}
