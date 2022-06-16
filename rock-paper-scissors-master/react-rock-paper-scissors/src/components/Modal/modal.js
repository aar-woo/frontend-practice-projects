import styles from './modal.module.css';
import GameOption from '../GameOption/gameOption';
import rulesImg from '../../images/image-rules.svg'
import closeIcon from '../../images/icon-close.svg';
export default function Modal(props) {
    return (
        <div className={`${styles.modal} container-fluid h-100 bg-white d-flex flex-column align-items-center
        justify-content-around py-3`}>
            <h1 className={`${styles.modalTitle} fw-bold`}>RULES</h1>
            <img src={rulesImg} className=''/>
            <img src={closeIcon} className={styles.closeIcon}/>
        </div>
    )
}