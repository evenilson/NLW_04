import styles from '../styles/pages/Home.module.css'

import { Profile } from "../components/Profile"
import { ExperienceBar } from "../components/ExperienceBar";
import { CompletedChallenges } from "../components/CompletedChallenges";

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
        </div>
      </section>
    </div>
  )
}
