import styles from './header.module.css';
export default function Header(props) {
    return (
        <div className={`${styles.headerOutline} row m-4 p-2 d-flex justify-content-between border border-3 rounded`}>
            <div className="col-4 text-start d-flex align-items-center"> 
                <h3 className="mb-0 lh-base text-white fw-bold">ROCK PAPER SCISSORS</h3>
            </div>
            <div className={`${styles.score} py-5 col-4 border bg-light rounded d-flex flex-wrap justify-content-center align-content-center`}>
                <p className="m-0 lh-1">SCORE</p>
                <h1 className={`${styles.scoreNum} m-0 lh-1 d-flex align-self-start`}>12</h1>
            </div>
        </div>
    )
}