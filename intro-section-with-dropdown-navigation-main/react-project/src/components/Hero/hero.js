import "./hero.css"
import heroMobile from '../../images/image-hero-mobile.png'
import heroDesktop from '../../images/image-hero-desktop.png'
import clientBiz from '../../images/client-databiz.svg';
import audiophile from '../../images/client-audiophile.svg';
import meet from '../../images/client-meet.svg';
import maker from '../../images/client-maker.svg';

export default function Hero(props) {
    
    return (
        <>
        <div className="hero-container">
            <div className="row hero-row">
                <div className="col-half hero-text-desktop">
                    <h1>Make remote work</h1>
                    <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                    <button className="btn-learn-more">Learn more</button>
                    <div className="logos-container">
                        <img src={clientBiz} />
                        <img src={audiophile}  id="audiophile-img" />
                        <img src={meet} />
                        <img src={maker} />
                    </div>
                </div>
                
                <div className="col-half img-container">
                    <img src={heroMobile} className="hero-mobile"></img>
                    <img src={heroDesktop} className="hero-desktop"></img>
                </div>
            </div>
        </div>
        </>
    )
}