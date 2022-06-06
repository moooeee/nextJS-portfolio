import Underline from "./underline"
import styles from "./styles/section.module.scss"

function Section({ children, title }) {
  return (
    <article className={styles.container}>
      <div className={styles.headingWrapper}>
        <h2>
          {title} <Underline />
        </h2>
      </div>
      {children}
    </article>
  )
}

export default Section
