import styles from './modal.module.css';
import GameOption from '../GameOption/gameOption';
import rulesImg from '../../images/image-rules.svg'
import closeIcon from '../../images/icon-close.svg';
export default function Modal(props) {
    const {modalIsOpen, toggleModal} = props;
    let modalClass = `${styles.modal} d-none container-fluid h-100 bg-white d-flex flex-column align-items-center
    justify-content-around py-3`
    if (modalIsOpen) {
        modalClass = `${styles.modal} container-fluid h-100 bg-white d-flex flex-column align-items-center
        justify-content-around py-3`;
    }
    return (
        <div className={modalClass}>
            <h1 className={`${styles.modalTitle} fw-bold`}>RULES</h1>
            <img src={rulesImg} className=''/>
            <button onClick={toggleModal}><img src={closeIcon} className={styles.closeIcon} /></button>
        </div>
    )
}