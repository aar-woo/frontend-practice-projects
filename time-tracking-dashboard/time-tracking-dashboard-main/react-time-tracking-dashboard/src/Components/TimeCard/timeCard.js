import styles from './timeCard.module.css'
import workIcon from '../../images/icon-work.svg';
import playIcon from '../../images/icon-play.svg';
import selfCareIcon from '../../images/icon-self-care.svg';
import socialIcon from '../../images/icon-social.svg';
import studyIcon from '../../images/icon-study.svg';
import exerciseIcon from '../../images/icon-exercise.svg';
import ellipsis from '../../images/icon-ellipsis.svg';
import {data} from '../../data.js'

const icons = {
    'work': workIcon,
    'play': playIcon,
    'selfCare': selfCareIcon,
    'social': socialIcon,
    'study': studyIcon,
    'exercise': exerciseIcon
}

export default function TimeCard(props) {
    let {bg, category} = props;
    const icon = icons[category]
    const background = category + 'Bg';
    const categoryHoursObj = data[category ];

    if (category === 'selfCare') {
        category = 'self Care';
    }

    return (
        <div className="mt-4 mt-lg-0 col-lg-4 px-lg-3">
            <div className={`${styles[background]} ${styles.timeCardBg} container m-0`}>
                <div className="col-12 d-flex justify-content-end">
                    <img src={icon} className={`${styles.categoryIcon} `}/> 
                </div>
                <div className={`${styles.cardData} row align-items-center px-2 `}>
                    <div className="col-12 d-flex align-self-end justify-content-between text-white align-items-end">
                        <h5>{category[0].toUpperCase() + category.substring(1)}</h5>
                        <a><img src={ellipsis} className="py-3"></img></a>
                    </div>
                    <div className="col-12 d-flex align-self-start justify-content-between flex-lg-column">
                        <h1 className="fw-normal text-start">{`${categoryHoursObj.week}hrs`}</h1>
                        <p className='text-lg-start'>{`Last Week - ${categoryHoursObj.lastWeek}hrs`}</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}