import { useEffect } from "react"
import styles from "./styles/themes.module.scss"

function Themes() {
  useEffect(() => {
    const theme = localStorage.getItem("$$$myTheme$$$")
    if (!theme) {
      localStorage.setItem("$$$myTheme$$$", "theme1")
      document.body.classList = "theme1"
    } else {
      document.body.classList = theme
    }
  }, [])

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          document.body.classList = "theme1"
          localStorage.setItem("$$$myTheme$$$", "theme1")
        }}
        className={styles.theme1}
      />
      <button
        onClick={() => {
          document.body.classList = "theme2"
          localStorage.setItem("$$$myTheme$$$", "theme2")
        }}
        className={styles.theme2}
      />
      <button
        onClick={() => {
          document.body.classList = "theme3"
          localStorage.setItem("$$$myTheme$$$", "theme3")
        }}
        className={styles.theme3}
      />
      <button
        onClick={() => {
          document.body.classList = "theme4"
          localStorage.setItem("$$$myTheme$$$", "theme4")
        }}
        className={styles.theme4}
      />
    </div>
  )
}

export default Themes
