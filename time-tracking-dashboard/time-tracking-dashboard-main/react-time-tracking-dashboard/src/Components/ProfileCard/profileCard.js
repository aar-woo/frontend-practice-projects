import JeremyProf from "../../images/image-jeremy.png";
import styles from './profileCard.module.css';
export default function ProfileCard() {
    return (
        <div className={styles.profCard}>
            <div className={`${styles.profBg} row w-100 m-0`}>
                <div className="col-4 p-3" >
                    <img src={JeremyProf} className="w-100 border border-3 rounded-circle" />  
                </div>
                <div className="col-8 d-flex flex-column align-items-start justify-content-center" >
                    <p className="m-0">Report for</p>
                    <h2 className='fw-normal text-white'>Jeremy Robson</h2>
                </div>
            </div>
            <div className={`${styles.intervals} row align-items-center`}>
                <ul className="list-unstyled m-0 d-flex justify-content-around align-items-center">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Montly</li>
                </ul>
            </div>
        </div>
    )
}