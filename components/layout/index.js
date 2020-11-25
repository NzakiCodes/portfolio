import Head from 'next/head';
import { Fragment } from 'react';
import styles from '../../styles/layout.module.css';
import utils from '../../styles/util.module.css';
import Sidenav from '../nav/sidenav';
import { motion } from 'framer-motion'
export default function Layout({ children, pageTitle,navActive }) {
    return (
        <Fragment>
            <Head>
                <title>{pageTitle} | NzakiCodes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={utils.row}>
                <motion.div
                    className={utils.sidenav}
                    initial={{
                        width: '10%',
                        speed:3
                    }}
                    animate={{
                        width: "22%"
                    }}
                >
                    <Sidenav active={navActive} />
                </motion.div>
                <motion.div
                    className={utils.sidenav}
                    initial={{
                        width: '100%',
                        speed:3
                    }}
                    animate={{
                        width: "78%"
                    }} className={utils.main}>
                    {children}
                </motion.div>
            </div>
        </Fragment>
    )
}