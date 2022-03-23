import Link from "next/link"
import styles from "./styles/contact.module.scss"

function Contact() {
  return (
    <div className={styles.container}>
      <ul>
        <li>
          <Link href="https://twitter.com/moe_omari">
            <a target="_blank">twitter</a>
          </Link>
        </li>
        <li>
          <Link href="https://github.com/moooeee">
            <a target="_blank">github</a>
          </Link>
        </li>
      </ul>
      <div className={styles.background}></div>
    </div>
  )
}

export default Contact
