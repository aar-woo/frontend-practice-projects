import styles from './header.module.css';
export default function Header(props) {
    return (
        <div className={`${styles.headerOutline} row m-4 p-2 d-flex justify-content-between border border-3 rounded`}>
            <div className="col-4 text-start d-flex align-items-center"> 
                <h4 className="mb-0 lh-1 text-white fw-bold">ROCK PAPER SCISSORS</h4>
            </div>
            <div className={`${styles.score} py-4 col-4 border bg-light rounded d-flex flex-wrap justify-content-center align-content-center`}>
                <p className="m-0">SCORE</p>
                <h1 className={`${styles.scoreNum} fw-bold m-0`}>12</h1>
            </div>
        </div>
    )
}