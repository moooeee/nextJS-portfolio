import Section from "./section"
import styles from "./styles/techStack.module.scss"

const tectStack = [
  "React",
  "NextJS",
  "Redux",
  "React Router",
  "Reach UI",
  "React Query",
  "React Aria",
  "CSS Modules",
  "Sass",
  "Framer Motion",
  "Jest",
  "React Testing Library",
]

function TechStack() {
  return (
    <Section title="Tech Stack">
      <div className={styles.container}>
        <h4>
          Here are a few technologies I&apos;ve been working with recently:
        </h4>
        <ul className={styles.techStackList}>
          {tectStack.map((tech) => {
            return <li key={tech}>{tech}</li>
          })}
        </ul>
      </div>
    </Section>
  )
}

export default TechStack
