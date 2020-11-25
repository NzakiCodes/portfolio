import Head from 'next/head';
import { Fragment } from 'react'
import styles from '../../styles/layout.module.css'
export default function Layout({ children, pageTitle }) {
    return (
        <Fragment>
            <Head>
                <title>{ pageTitle } | NzakiCodes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                Nzaki
                {children}
            </main>
        </Fragment>
    )
}