import styles from "./styles/whoIAm.module.scss"

function WhoIAm() {
  return (
    <div className={styles.container}>
      <h1>
        Hi!{" "}
        <span>
          <img src="/waving-hand.png" alt="waving hand" />
        </span>
        <br />I am Mohamed
      </h1>
      <p>I am a Frontend Engineer</p>
      <p>I design and develop digital experiences</p>
    </div>
  )
}

export default WhoIAm
