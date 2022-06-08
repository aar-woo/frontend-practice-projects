import styles from './header.module.css';
export default function Header(props) {
    return (
        <div className="row m-4 p-2 d-flex justify-content-between border border-3 rounded">
            <div className="col-4 text-start d-flex align-items-center"> 
                <h5 className="mb-0 lh-1">ROCK PAPER SCISSORS</h5>
            </div>
            <div className={`${styles.score} col-4 border bg-light rounded d-flex flex-wrap justify-content-center align-content-center`}>
                <p className="m-0">SCORE</p>
                <p className="fs-1 fw-bold m-0">12</p>
            </div>
        </div>
    )
}