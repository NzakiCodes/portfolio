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
                <meta
                    name="description"
                    content="Ekikere-abasi Michael Ekere "
                />
                <link rel="manifest" href="/manifest.json" />
                <meta name="theme-color" content="#0b1023" />
                <meta
                    property="og:image"
                    content={`/images/my_avatar.png`}
                />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="og:title" content={`${pageTitle} | Ekikere-abasi Michael Ekere`} />
                <meta name="twitter:card" content="summary_large_image" />
                <link async rel="stylesheet" href="/font-awesome/css/all.min.css" />
                <script data-ad-client="ca-pub-5437248160093166" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
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
