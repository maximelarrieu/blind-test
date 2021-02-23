import React from 'react'

import {Button} from '@material-ui/core'
import '../styles/Home.css'

function Profile() {
    return (
        <div className="center">
            <img src="https://icotar.com/initials/user" alt="avatar" style={{width: 50}}/>
            <h2>Hello --user--</h2>
            <Button variant="contained" color="primary">
                <a href="/logout">Sign Out</a>
            </Button>
        </div>
    )
}

export default Profile