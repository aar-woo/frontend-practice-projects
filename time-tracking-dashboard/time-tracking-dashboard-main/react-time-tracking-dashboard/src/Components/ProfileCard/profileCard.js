import JeremyProf from "../../images/image-jeremy.png";
import styles from './profileCard.module.css';
export default function ProfileCard(props) {
    const {handleInterval, currInterval} = props;
    
    const intervals = document.querySelectorAll('li');

    for (let i = 0; i < intervals.length; i++) {
        if (intervals[i].getAttribute('value') === currInterval) {
            console.log(intervals[i])
            intervals[i].className = 'text-white'
        } else {
            intervals[i].className = 'text-inherit'
        }
    }

    return (
        <div className={`${styles.profCard}`}>
            <div className={`${styles.profBg} row w-100 m-0 d-lg-flex flex-lg-column p-lg-3`}>
                <div className="col-4 p-3 p-lg-0" >
                    <img src={JeremyProf} className="w-100 border border-3 rounded-circle" />  
                </div>
                <div className="col-8 d-flex flex-column align-items-start justify-content-center my-lg-4 px-0" >
                    <p className="mb-0">Report for</p>
                    <h2 className='text-start fw-normal text-white'>Jeremy Robson</h2>
                </div>
            </div>
            <div className={`${styles.intervals} row align-items-center px-lg-3`}>
                <ul className="list-unstyled m-0 d-flex justify-content-around align-items-center flex-lg-column align-items-lg-start" onClick={handleInterval}>
                    <a href="">
                        <li value="daily">Daily</li>
                    </a>
                    <a href="" >
                        <li value="weekly">Weekly</li>
                    </a>
                    <a href="" >
                        <li value="monthly">Monthly</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}