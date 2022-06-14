import triangleBg from '../../images/bg-triangle.svg'
import GameOption from '../GameOption/gameOption'
import styles from './options.module.css';

export default function Options() {
    return (
        <>
            <div className={`${styles.triangle}`}>
                <div className={styles.paperPosition}>
                    <GameOption hand="paper"/>
                </div>
                <div className={styles.scissorsPosition}>
                    <GameOption hand="scissors" />
                </div>
              
                <div className={styles.rockPosition}>
                    <GameOption hand="rock" />
                </div>
            </div>
        </>
    )
}