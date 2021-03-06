import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.scss"
import Contact from "../components/contact"
import WhoIAm from "../components/whoIAm"
import Projects from "../components/projects"
import Footer from "../components/footer"
import Themes from "../components/themes"
import JokeOfTheDay from "../components/jokeOfTheDay"
import AboutMe from "../components/aboutMe"
import TechStack from "../components/techStack"

function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="My Portfolio" />
        <meta name="theme-color" className="meta-theme" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Contact />
      <Themes />
      <main>
        <WhoIAm />
        <AboutMe />
        <TechStack />
        <Projects />
      </main>
      <JokeOfTheDay />
      <Footer />
    </div>
  )
}

export default Home
