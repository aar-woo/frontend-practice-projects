import "./header.css"

export default function Header(props) {

    return (
        <div className="row">

            <div className="col-half margin-one header">
                <ul className="header-list">
                    <span className="logo">snap</span>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="col-half button-list">
                <div className="bars-icon">
                    <i className="fa-solid fa-bars fa-lg hide"></i>
                    <button className="btn btn-login">Login</button>
                    <button className="btn btn-register">Register</button>
                </div>  
            </div>
        </div>
    )
}