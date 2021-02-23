// frontend/src/components/Navigation/index.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
    const sessionUser = useSelector(state => state.session.user);

    console.log(sessionUser);

    let sessionLinks;
    if (sessionUser) {
        sessionLinks = (
            <ProfileButton user={sessionUser} />
        );
    } else {
        sessionLinks = (
            <>
                <LoginFormModal />
                <NavLink to="/signup">
                    <button type="button" className="nav-btn" id="signup-btn">Sign Up</button>
                </NavLink>
            </>
        );
    }

    return (
        <div className="navbar">
            <NavLink exact to="/" className="nav-div">
                <div className="nav-home">
                    <span className="scotty-text">ScottySmith</span>
                    <div className="horse-logo"></div>
                </div>
            </NavLink>
            <div className="login-signup">
                {isLoaded && sessionLinks}
            </div>
        </div>
    );
}

export default Navigation;
