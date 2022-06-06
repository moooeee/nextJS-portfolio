import Section from "./section"
import styles from "./styles/aboutMe.module.scss"

function AboutMe() {
  return (
    <Section title="About Me!">
      <div className={styles.container}>
        <div className={styles.paragraph}>
          I am a Frontend Engineer who likes to craft solid and scalable
          frontend products with great and fluent user experiences.
        </div>
        <div className={styles.paragraph}>
          I&apos;ve built products for companies and businesses around the globe
          ranging from marketing websites to complex solutions and enterprise
          apps with focus on fast, elegant and accessible user experiences.
        </div>
        <div className={styles.paragraph}>
          Typically I&apos;ll be digging in with React, architecting CSS in and
          out of JavaScript, or orchestrating animations with Framer. I thrive
          on bringing ideas to life and delivering eye-catching results. All
          whilst possessing a keen eye for design, accessibility, and
          well-structured code.
        </div>
      </div>
    </Section>
  )
}

export default AboutMe
