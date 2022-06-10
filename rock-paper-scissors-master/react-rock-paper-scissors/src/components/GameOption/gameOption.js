import rockIcon from '../../images/icon-rock.svg';
import styles from './gameOption.module.css';
export default function GameOption(props) {
    return (
        <div className={`${styles.optionInnerCircle} bg-white border rounded-circle d-flex justify-content-center align-items-center`}>
            <img src={rockIcon} className="w-50 h-50"/>
        </div>
    )
}