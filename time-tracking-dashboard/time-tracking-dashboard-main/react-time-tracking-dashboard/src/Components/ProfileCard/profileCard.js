import JeremyProf from "../../images/image-jeremy.png";
import styles from './profileCard.module.css';
export default function ProfileCard() {
    return (
        <div className="prof-card">
            <div className={`${styles.profBg} d-flex`}>
                <div className="col-4 p-3" >
                    <img src={JeremyProf} className="w-100"/>  
                </div>
                <div className="col-8 d-flex flex-column align-items-start justify-content-center" >
                    <p className="m-0">Report for</p>
                    <h2>Jeremy Robson</h2>
                </div>
            </div>
            <div className="row">
                <ul className="list-unstyled d-flex justify-content-around">
                    <li>Daily</li>
                    <li>Weekly</li>
                    <li>Montly</li>
                </ul>
            </div>
        </div>
    )
}