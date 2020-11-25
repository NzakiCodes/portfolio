import Head from 'next/head'
import Layout from '../components/layout'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Home() {
    return (
        <Layout pageTitle="About">
            <motion.h1
                
            >
                About
            </motion.h1>
            <Link href="/">
                <a>Home</a>
            </Link>
        </Layout>
    )
}
