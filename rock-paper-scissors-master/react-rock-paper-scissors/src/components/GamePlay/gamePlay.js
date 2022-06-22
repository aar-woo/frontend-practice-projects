import styles from './gamePlay.module.css';
import GameOption from '../GameOption/gameOption';

export default function GamePlay(props) {
    const { userHand, compHand} = props;

    return (
        <div className={styles.gameContainer}>
            <div className='row d-flex justify-content-center'>
                <div className='col-5 d-flex flex-column align-items-center'>
                    <GameOption hand='rock' />
                    <p className='text-white my-4'>YOU PICKED</p>
                </div>
                <div className='col-5 d-flex flex-column align-items-center'>
                    <GameOption hand='scissors' />
                    <p className='text-white my-4'>THE HOUSE PICKED</p>
                </div>
            </div>
        </div>
    )
}