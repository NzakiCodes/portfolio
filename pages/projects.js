import { ImageCard } from '../components/cards';
import { Title } from '../components/typography';
import Layout from '../components/layout';
import styles from '../styles/util.module.css';
import { motion } from 'framer-motion';

export default function Projects() {
  const projects = [
    {
      id: 1,
      src: "/images/projects/feyrep.png"
    },
    {
      id: 2,
      src: "/images/projects/NTASA.png"
    },
    {
      id: 3,
      src: "/images/projects/pearla_confectioneries.jpg"
    },
    {
      id: 4,
      src: "/images/projects/breakingbad.png"
    },
    {
      id: 5,
      src: "/images/projects/trueworship-app.png"
    },
    {
      id: 6,
      src: "/images/projects/tycoone-tk.png"
    },
    {
      id: 7,
      src: "/images/projects/music-go.png"
    },
    {
      id: 8,
      src: "/images/projects/salesforce-x.png"
    },
    {
      id: 9,
      src: "/images/projects/book-store.png"
    }
  ];
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <Layout pageTitle="Projects" navActive="projects">
      <Title>Projects</Title>
      <motion.div variants={container}
        initial="hidden"
        animate="visible" className={styles.flexRow}>
        {
          projects.map((project) => (
            <motion.div key={project.id} variants={item} >
              <ImageCard variants={item} image={project.src} />
            </motion.div>
          ))
        }
      </motion.div>
    </Layout>
  )
}
