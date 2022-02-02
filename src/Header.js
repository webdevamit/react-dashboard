import React from 'react';
import { Link } from "react-router-dom";
import { useUser } from "./context/userContext";

const Header = () => {
    const { user } = useUser();
    const isAuth = user ? true : false;
    return (
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
            <div className="container">
                <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto">
                        {
                            isAuth
                                ?
                                (<><li>
                                    <img width="40" lazy="true" class="profile-pic" alt={user.name} src="https://prod.degreedcdn.com/content/img/default/profile/23.svg?v=10802875170726" />
                                </li>
                                </>
                                ) :
                                (<>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
                                    </li>
                                </>)
                        }
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;
