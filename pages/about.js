import Layout from '../components/layout';
import { Title } from '../components/typography';
import util from '../styles/util.module.css';
import { motion } from 'framer-motion';
import Icon from '../components/icons'

export default function Home() {
    return (
        <Layout pageTitle="About" navActive="about">
            <Title>About</Title>
            <div className={util.About__content}>
                <div className={util.About__header}>
                    <motion.h1
                        initial={{
                            opacity: 0,
                            x: -30,
                            y: -30,
                            letterSpacing: '-20px'
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            y: 0,
                            letterSpacing: '-6px'

                        }}

                        transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                        Ekikere-Abasi <span>Michael</span>
                        <span className={util.pinkDot}></span>
                    </motion.h1>
                    <motion.h3 initial={{
                        opacity: 0,
                    }}
                        animate={{
                            opacity: 1,

                        }}

                        transition={{
                            delay: 0.4,
                            duration: 0.3,
                            ease: "easeOut"
                        }}
                    >
                        {/* FullStack  */}
                    Web Developer
                    </motion.h3>
                    <motion.p
                        initial={{
                            opacity: 0,
                        }}
                        animate={{
                            opacity: 1,

                        }}

                        transition={{
                            delay: 0.8,
                            duration: 0.6,
                        }}>

                        {/* Teaching Web Development through a free mentoring program. */}
                    Currently building product for a StartUp,
                    Also contributing to Opensource projects.
                <br />
                    Inlove with <span>React.js</span> and <span>Next.js</span>, learning <span>TailwindCSS</span>.
                        Read and Blog on <a href="https://hashnode.com" target="_blank">Hashnode</a>.
                </motion.p>
                    <div className={util.About__callToActionButtons}>
                        <button>Hire Me</button>
                        <button>Know More</button>
                    </div>
                    <div className={util.About__previousClients}>
                        <Icon name="google" type="brand"/>
                    </div>
                </div>
                <div className={util.About__watermarkImage}>
                    <img src="/images/profile_tranparent.png" alt="Ekikere-Abasi Michael Ekere" />
                </div>
            </div>
        </Layout>
    )
}