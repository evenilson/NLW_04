import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/evenilson.png" alt="Evenilson Liandro"/>
            <div>
                <strong>Evenilson Liandro</strong>
                <p>
                    <img src="icons/level.png" alt="Level"/>
                    Level 1
                </p>
            </div>
        </div>
    )
}