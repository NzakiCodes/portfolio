import { ImageCard } from '../components/cards';
import { Title } from '../components/typography';
import Layout from '../components/layout';
import styles from '../styles/util.module.css';

export default function Projects() {
  return (
    <Layout pageTitle="Projects" navActive="projects">
      <Title>Projects</Title>
      <div className={styles.flexRow}>
        <ImageCard animate image="/images/projects/feyrep.png" />
        <ImageCard image="/images/projects/NTASA.png" />
        <ImageCard image="/images/projects/pearla_confectioneries.jpg" />
        <ImageCard image="/images/projects/breakingbad.png" />
        <ImageCard image="/images/projects/trueworship-app.png" />
        <ImageCard image="/images/projects/tycoone-tk.png" />
        <ImageCard image="/images/projects/music-go.png" />
        <ImageCard image="/images/projects/salesforce-x.png" />
        <ImageCard image="/images/projects/book-store.png" />
      </div>
    </Layout>
  )
}
