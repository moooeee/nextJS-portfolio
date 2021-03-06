import { useEffect } from "react"
import styles from "./styles/themes.module.scss"

const themes = ["#ca2c2b", "#ffdb59", "#374696", "#f04f32"]

function Themes() {
  useEffect(() => {
    const theme = localStorage.getItem("$$$myTheme$$$")
    if (!theme) {
      localStorage.setItem("$$$myTheme$$$", "theme1")
      document.body.classList = "theme1"
      document.getElementsByClassName("meta-theme")[0].content = themes[0]
    } else {
      document.body.classList = theme
      document.getElementsByClassName("meta-theme")[0].content =
        themes[+theme.charAt(theme.length - 1) - 1]
    }
  }, [])

  return (
    <div className={styles.container}>
      <button
        onClick={() => {
          document.body.classList = "theme1"
          localStorage.setItem("$$$myTheme$$$", "theme1")
          document.getElementsByClassName("meta-theme")[0].content = "#ca2c2b"
        }}
        className={styles.theme1}
        aria-label="switch to red theme"
      />
      <button
        onClick={() => {
          document.body.classList = "theme2"
          localStorage.setItem("$$$myTheme$$$", "theme2")
          document.getElementsByClassName("meta-theme")[0].content = "#ffdb59"
        }}
        className={styles.theme2}
        aria-label="switch to yellow theme"
      />
      <button
        onClick={() => {
          document.body.classList = "theme3"
          localStorage.setItem("$$$myTheme$$$", "theme3")
          document.getElementsByClassName("meta-theme")[0].content = "#374696"
        }}
        className={styles.theme3}
        aria-label="switch to blue theme"
      />
      <button
        onClick={() => {
          document.body.classList = "theme4"
          localStorage.setItem("$$$myTheme$$$", "theme4")
          document.getElementsByClassName("meta-theme")[0].content = "#f04f32"
        }}
        className={styles.theme4}
        aria-label="switch to light green theme"
      />
    </div>
  )
}

export default Themes
