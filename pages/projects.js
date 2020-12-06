import Card from '../components/cards/card';
import { Title } from '../components/typography';
import Layout from '../components/layout';
import styles from '../styles/util.module.css';

export default function Projects() {
  return (
    <Layout pageTitle="Projects" navActive="projects">
      <Title>Projects</Title>
      <div className={styles.flexRow}>
        <Card image="/images/projects/feyrep.png"/>
        <Card image="/images/projects/NTASA.png"/>
        <Card image="/images/projects/pearla_confectioneries.jpg"/>
        <Card image="/images/projects/breakingbad.png"/>
        <Card image="/images/projects/breakingbad.png"/>
      </div>
    </Layout>
  )
}
