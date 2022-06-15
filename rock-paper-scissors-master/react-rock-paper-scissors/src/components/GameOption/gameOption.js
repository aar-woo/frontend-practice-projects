import rockIcon from '../../images/icon-rock.svg';
import paperIcon from '../../images/icon-paper.svg';
import scissorsIcon from '../../images/icon-scissors.svg';

import styles from './gameOption.module.css';
export default function GameOption(props) {
    const {hand, mode} = props;
    const handToIconObj = {
        rock: rockIcon,
        paper: paperIcon,
        scissors: scissorsIcon
    }
    
    let outerCircleClass = `${hand}OuterCircle`;
    let innerCircleClass = 'innerCircle';

    if (mode === 'rules') {
        outerCircleClass = 'rulesOuterCircle';
        innerCircleClass = 'rulesInnerCricle';
    }
    
    const icon = handToIconObj[hand]

    return (
        <div className={`${styles[outerCircleClass]} border-none rounded-circle d-flex justify-content-center align-items-center`}>
            <div className={`${styles[innerCircleClass]} bg-white border-none rounded-circle d-flex justify-content-center align-items-center`}>
                <img src={icon} className="w-40 h-40"/>
            </div>
        </div>
       
    )
}