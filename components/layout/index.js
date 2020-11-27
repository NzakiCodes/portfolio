import Head from 'next/head';
import { Fragment } from 'react';
import styles from '../../styles/layout.module.css';
import utils from '../../styles/util.module.css';
import Sidenav from '../nav/sidenav';
export default function Layout({ children, pageTitle, navActive }) {
    return (
        <Fragment>
            <Head>
                <title>{pageTitle} | NzakiCodes</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={utils.row}>
                <div className={utils.sidenav}>
                    <Sidenav active={navActive} />
                </div>
                <div className={utils.main}>
                    {children}
                </div>
            </div>
        </Fragment>
    )
}