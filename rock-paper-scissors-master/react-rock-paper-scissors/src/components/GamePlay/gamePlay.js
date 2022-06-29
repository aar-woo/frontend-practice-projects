import styles from './gamePlay.module.css';
import GameOption from '../GameOption/gameOption';
import Button from '../Button/button';

export default function GamePlay(props) {
    const { userHand, compHand, setUserHand } = props;

    const outcomesObj = {
        rock: {
            paper: 'lose',
            scissors: 'win',
            rock: 'tied'
        },
        paper: {
            rock: 'win',
            scissors: 'lose',
            paper: 'tied'
        },
        scissors: {
            rock: 'lose',
            paper: 'win',
            scissors: 'tied'
        }
    }

    const outcome = outcomesObj[userHand][compHand];

    return (
        <div className={styles.gameContainer}>
            <div className='row d-flex justify-content-center'>
                <div className='col-5 d-flex flex-column align-items-center'>
                    <GameOption hand={userHand} />
                    <p className='text-white my-4'>YOU PICKED</p>
                </div>
                <div className='col-5 d-flex flex-column align-items-center'>
                    <GameOption hand={compHand} />
                    <p className='text-white my-4'>THE HOUSE PICKED</p>
                </div>
                <h1 className={`${styles.outcome} text-white`}>YOU {outcome.toUpperCase()}</h1>
                <Button type='play again' handleClick={setUserHand} />
            </div>
        </div>
    )
}