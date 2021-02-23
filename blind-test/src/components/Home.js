import React from 'react'
import {Button} from '@material-ui/core'

import "../styles/Home.css"


function Home() {
    return (
        <div className="test">
            <img src="https://icotar.com/initials/user" alt="avatar" style={{width:50}}/>
            <h1>Welcome --user--</h1>
            <Button variant="contained" color="primary">Take a new game</Button>
        </div>
    )
}

export default Home