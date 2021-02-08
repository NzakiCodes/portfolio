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
                            x: -30,
                            y: -230,
                        }}
                        animate={{
                            x: 0,
                            y: 0,

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
                    📝 Poet, 💻 Web Developer
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
                            duration: 0.3,
                        }}>


                        Currently building Products for Startups,
                        Love contributing to Opensource projects. <br />
                        Mentor on Web Designing <a href="https://facebook.com/TechSkillsHack" rel="noopener" target="_blank">@TechSkillsHack</a>.
                        <br />
                        Inlove with, <a href="https://reactjs.org/" rel="noopener" target="_blank">React.js</a>, <a href="https://graphql.org/" target="_blank">GraphQL</a> and <a href="https://nextjs.org/" target="_blank">Next.js</a>, learning <a href="https://tailwindcss.com/" target="_blank">TailwindCSS</a>.
                        Read and Blog on <a href="https://hashnode.com" rel="noopener" target="_blank">Hashnode</a>.
                    </motion.p>
                    <motion.div initial={{
                        opacity: 0,
                    }}
                        animate={{
                            opacity: 1,

                        }}

                        transition={{
                            delay: 1.1,
                            duration: 0.3,
                        }}>
                        <div className={util.About__callToActionButtons}>
                            <a target="_blank" href="mailto:ekisnzaki@gmail.com">
                                <button>Hire Me</button>
                            </a>
                            <a target="_blank" href="/Ekikere-abasi Ekere.pdf">
                                <button>Know More</button>
                            </a>
                        </div>
                        <div className={util.About__previousClients}>
                            <span>Previous<br /> Client(s) </span>
                            <div className={util.About__previousClients_images}>
                                <img src="/images/clients/feyrep.png" alt="FEYReP's logo" />
                            </div>
                            <div className={util.About__previousClients_images}>
                                <img style={{ width: 95, height: 42, margin: "auto", padding: 5 }} src="/images/clients/TedalaMarket_Approved_logo_Transparent_128x.webp" alt="TedalaMarket's logo" />
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    className={util.About__watermarkImage}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 0.1,

                    }}

                    transition={{
                        delay: 0.8,
                        duration: 0.3,
                    }}>
                    <img src="/images/profile_tranparent.png" alt="Ekikere-Abasi Michael Ekere" />
                </motion.div>
            </div>
        </Layout>
    )
}