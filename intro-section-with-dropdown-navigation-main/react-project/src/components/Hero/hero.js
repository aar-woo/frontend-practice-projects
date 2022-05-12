import "./hero.css"
import heroMobile from '../../images/image-hero-mobile.png'
import heroDesktop from '../../images/image-hero-desktop.png'
import ClientBiz from '../../images/client-databiz.svg';
import { useMediaQuery } from 'react'

export default function Hero(props) {
    
    return (
        <>
        <div className="hero-container">
            <div className="row hero-row">
                <div className="col-half hero-text-desktop">
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                </div>
                <div className="col-half img-container">
                    <img src={heroMobile} className="hero-mobile"></img>
                    <img src={heroDesktop} className="hero-desktop"></img>
                    {/* <img src={ClientBiz} /> how you can use svg in react */}
                </div>
            </div>
        </div>
        </>
    )
}