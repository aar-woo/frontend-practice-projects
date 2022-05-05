import "./appDrawer.css"

export default function AppDrawer(props) {

    return (
        <div className="app-drawer">
            <div className="row close-btn-row">
                <a><i class="fa-solid fa-x fa-2xl close-btn"></i></a>
            </div> 
            <div className="row">
                <ul className="nav-list">
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
        </div>
    )
}