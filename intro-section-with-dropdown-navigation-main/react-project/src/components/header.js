import "./header.css"

export default function Header(props) {

    return (
        <div className="row">
            <div className="col-half margin-one header">
                <ul className="header-list">
                    <li className="logo">snap
                    </li>
                    <li>Features</li>
                    <li>Company</li>
                    <li>Careers</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="col-half button-list">
                    <button className="btn-login">Login</button>
                    <button className="btn-register">Register</button>
                </div>
           
        </div>
    )
}