import { useEffect, useState } from "react"
import styles from "./styles/jod.module.scss"

function JokeOfTheDay() {
  const [jod, setJod] = useState("")
  const [showJod, setShowJod] = useState(false)
  const [showReaction, setShowReaction] = useState(false)

  useEffect(() => {
    fetch("https://api.jokes.one/jod/")
      .then((res) => {
        return res.json()
      })
      .then((res) => {
        setJod(res.contents.jokes[0].joke.text)
      })
  }, [])

  function showReactionFn() {
    setShowReaction(true)
  }

  return (
    <div className={styles.container}>
      {!showJod && (
        <button className={styles.showJokeBtn} onClick={() => setShowJod(true)}>
          got time for a joke?
        </button>
      )}
      {showJod && (
        <div className={styles.joke}>
          <div className={styles.jodTitle}>Joke Of The Day</div>
          <div className={styles.jodJoke}>{jod}</div>
        </div>
      )}
      {showJod && (
        <div className={styles.feedback}>
          <div className={styles.feedbackQ}>do you like it?</div>
          <div
            className={styles.feedbackReaction}
            style={{ display: "flex", gap: "15px" }}
          >
            <button onClick={showReactionFn}>😂</button>
            <button onClick={showReactionFn}>😄</button>
            <button onClick={showReactionFn}>😐</button>
            <button onClick={showReactionFn}>🙁</button>
            <button onClick={showReactionFn}>😒</button>
          </div>
          {showReaction && (
            <div className={styles.myReactionOnTheirFeedbackLol}>
              i really dont care 😝
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default JokeOfTheDay
