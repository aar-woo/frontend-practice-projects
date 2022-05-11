import "./appDrawer.css"

export default function AppDrawer(props) {
    const {handleDrawer, drawerState} = props;

    let drawerClass = 'app-drawer hide-drawer hide';
    let shadeClass = 'overlay hide-overlay';
    if (drawerState) {
        drawerClass = 'app-drawer show-drawer';
        shadeClass = 'overlay'
    }
  

    return (
        <>
        <div className={shadeClass} onClick={handleDrawer}></div>
        <div className={drawerClass}>
            <div className="row close-btn-row">
                <a href="#" onClick={handleDrawer}><i className="fa-solid fa-x fa-2xl close-btn"></i></a>
            </div> 
            <div className="row">
                <ul className="nav-list">
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="row btn-list-drawer">
                <button className="btn-login-drawer">Login</button>
                <button className="btn-register-drawer">Register</button>
            </div>
            
        </div>

        </>
    )
}