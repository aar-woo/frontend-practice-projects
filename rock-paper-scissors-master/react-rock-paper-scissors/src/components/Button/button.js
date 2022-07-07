import styles from './button.module.css';

export default function Button(props) {
    const { type, handleClick } = props;

    let typeClass = type;
    let classNames = `${styles[typeClass]} btn btn-outline-light btn-lg fw-lighter`;


    if (type.includes(' ')) {
        const spaceIndex = type.indexOf(' ');
        typeClass = type.slice(0, spaceIndex) + type.slice(spaceIndex + 1, spaceIndex + 2).toUpperCase() + type.slice(spaceIndex + 2, type.length)
        classNames = `${styles[typeClass]} btn btn-light`
    }
    

    return (
        <div>
            <a value=""><button type="button" className={classNames} onClick={handleClick}>{type.toUpperCase()}</button></a>
        </div>
    )
}