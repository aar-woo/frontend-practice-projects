import rockIcon from '../../images/icon-rock.svg';
import paperIcon from '../../images/icon-paper.svg';
import scissorsIcon from '../../images/icon-scissors.svg';

import styles from './gameOption.module.css';
export default function GameOption(props) {
    const {hand} = props;
    const handToIconObj = {
        rock: rockIcon,
        paper: paperIcon,
        scissors: scissorsIcon
    }
    const icon = handToIconObj[hand]

    const optionClass = `${hand}Outer`
    return (
        <div className={`${styles[`${hand}OuterCircle`]} border-none rounded-circle d-flex justify-content-center align-items-center`}>
            <div className={`${styles.innerCircle} bg-white border-none rounded-circle d-flex justify-content-center align-items-center`}>
                <img src={icon} className="w-40 h-40"/>
            </div>
        </div>
       
    )
}