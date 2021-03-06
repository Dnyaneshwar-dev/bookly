import React from 'react'
import { NavLink } from 'react-router-dom'
import EventIcon from '@material-ui/icons/Event';
function Navbar() {
    const title = "Store"
    return (
        <>
            <div className="container-fluid nav_bg">
                <div className="row">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <NavLink className="navbar-brand" to="/"> {title}</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto">
                               

                            </ul>

                        </div>
                    </nav>
                </div>
            </div>

        </>
    )
}

export default Navbar
