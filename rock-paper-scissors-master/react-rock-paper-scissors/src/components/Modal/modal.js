import styles from './modal.module.css';
import Options from '../OptionsComponent/options';
export default function Modal(props) {
    return (
        <div className={`${styles.modal} container-fluid h-100 bg-white`}>
            <h1 className={`${styles.modalTitle} fw-bold`}>RULES</h1>

        </div>
    )
}