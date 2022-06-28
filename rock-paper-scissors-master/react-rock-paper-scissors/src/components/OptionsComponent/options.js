import triangleBg from '../../images/bg-triangle.svg'
import GameOption from '../GameOption/gameOption'
import styles from './options.module.css';

export default function Options(props) {
    const {setUserHand} = props;

    // const gameHands = document.querySelectorAll('a');

    

    return (
        <>
            <div className={`${styles.triangle}`}  onClick={setUserHand}>
                <div className={styles.paperPosition} >
                    <a value='paper'>
                        <GameOption hand="paper"/>
                    </a>
                </div>
                <div className={styles.scissorsPosition}>
                    <a value="scissors">
                        <GameOption hand="scissors" />
                    </a>
                </div>
              
                <div className={styles.rockPosition}>
                    <a value="rock">
                        <GameOption hand="rock" />
                    </a>
                </div>
            </div>
        </>
    )
}