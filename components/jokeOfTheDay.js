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
        <button
          aria-expanded={showJod}
          aria-controls="joke-of-the-day"
          aria-label="hear joke of the day"
          className={styles.showJokeBtn}
          onClick={() => setShowJod(true)}
        >
          Got time for a joke?
        </button>
      )}
      {showJod && (
        <div id="joke-of-the-day" role="region" className={styles.joke}>
          <div className={styles.jodTitle}>Joke Of The Day</div>
          <div className={styles.jodJoke}>{jod}</div>
        </div>
      )}
      {showJod && (
        <div className={styles.feedback}>
          <div className={styles.feedbackQ}>Do you like it?</div>
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
              I really dont care 😝
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default JokeOfTheDay
