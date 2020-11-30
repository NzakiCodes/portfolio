import Layout from '../components/layout';
import { Title } from '../components/typography';
import util from '../styles/util.module.css';
import { motion } from 'framer-motion';

export default function Home() {
    return (
        <Layout pageTitle="About" navActive="about">
            <Title>About</Title>
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
                        letterSpacing: '5px'

                    }}

                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    Nzaki <span>Michael</span>
                    <span className={util.pinkDot}></span>
                </motion.h1>
                <motion.h3 initial={{
                        opacity: 0,
                        letterSpacing: '-20px'
                    }}
                    animate={{
                        opacity: 1,
                        letterSpacing: '5px'

                    }}

                    transition={{ duration: 0.8, ease: "easeOut" }}>FullStack Web Developer</motion.h3>
            </div>
        </Layout>
    )
}