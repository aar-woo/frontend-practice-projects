import styles from './timeCard.module.css'
import workIcon from '../../images/icon-work.svg';
import ellipsis from '../../images/icon-ellipsis.svg'
export default function TimeCard(props) {
    // const {category} = props
    


    return (
        <div className={`mt-4`}>
            <div className={`${styles.workBg} ${styles.timeCardBg} container m-0`}>
                <div className="col-12 d-flex justify-content-end">
                    <img src={workIcon} className={`${styles.categoryIcon} `}/> 
                </div>
                <div className={`${styles.cardData} row align-items-center px-2`}>
                    <div className="col-4 d-flex flex-column align-items-start text-white">
                        <h5>Work</h5>
                        <h1 className="fw-normal">32hrs</h1>
                    </div>
                    <div className="col-8 d-flex flex-column align-items-end">
                        <a><img src={ellipsis} className="py-3"></img></a>
                        <p>Last Week - 36hrs</p>
                    </div>
                </div>  
            </div>
            
        </div>
    )
}