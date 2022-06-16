import styles from './modal.module.css';
import GameOption from '../GameOption/gameOption';
import rulesImg from '../../images/image-rules.svg'
export default function Modal(props) {
    return (
        <div className={`${styles.modal} container-fluid h-100 bg-white`}>
            <h1 className={`${styles.modalTitle} fw-bold`}>RULES</h1>
            <GameOption hand="rock"/>
        </div>
    )
}