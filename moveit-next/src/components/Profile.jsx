import { useContext } from 'react'
import { ChallengeContext } from '../contexts/ChallengeContext'
import styles from '../styles/components/Profile.module.css'

export function Profile() {
    const { level } = useContext(ChallengeContext)
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/evenilson.png" alt="Evenilson Liandro"/>
            <div>
                <strong>Evenilson Liandro</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    {level}
                </p>
            </div>
        </div>
    )
}