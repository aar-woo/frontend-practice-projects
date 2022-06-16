import styles from './button.module.css';

export default function Button(props) {
    const { type, toggleModal } = props;

    return (
        <button type="button" className={`${styles[type]} btn btn-outline-light btn-lg fw-lighter`} onClick={toggleModal}>{type.toUpperCase()}</button>
    )
}