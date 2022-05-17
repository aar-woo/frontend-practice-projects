import "./header.css"

export default function Header(props) {
    const {handleDrawer} = props;
    return (
        <div className="row">
            <div className="col-two-thirds margin-one header">
                <ul className="header-list">
                    <span className="logo">snap</span>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="col-one-third button-list">
                <a onClick={handleDrawer}><i className="fa-solid fa-bars fa-lg hide"></i></a>
                <button className="btn btn-login">Login</button>
                <button className="btn btn-register">Register</button>
            </div>
        </div>
    )
}