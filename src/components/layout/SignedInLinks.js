import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'
import {signOut} from "../../store/actions/authActions";

const SignedInLinks = ({signOut, profile}) => {
    return (
        <ul className="right">
            <li><NavLink to='/create'>+</NavLink></li>
            <li><a onClick={signOut}>Log out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.initials}</NavLink></li>
        </ul>

    );
};


export default connect(null, {signOut})(SignedInLinks);
