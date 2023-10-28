import { Fragment } from "react"
import { Outlet, Link } from "react-router-dom"
import { ReactComponent as CrwnLogo } from "../../../Assets/crown.svg"
import './Navigation.scss'
const Navigation = () => {
    return (
        <Fragment>
            <div className="navigation">
                <Link className="lodo-container" to='/'>
                    <CrwnLogo className="logo"/>
                </Link>
                <div className="nav-links-container">
                    <Link className="nav-link" to='/shop'>
                        SHOP
                    </Link>
                    <Link className="nav-link" to='/sign-in'>
                        Sign In
                    </Link>
                </div>
                <Outlet />
            </div>
        </Fragment>
    )
}


export default Navigation