import React from 'react'
import {Button} from '@material-ui/core'

import "../styles/Home.css"


function Home({props}) {
    return ( 
        <div className="center">
            <img src="https://icotar.com/initials/user" alt="avatar" style={{width:50}}/>
            <h1>Welcome {props.name}</h1>
            <Button variant="contained" color="primary">
                <a href="/game">Take a new game</a>
            </Button>
        </div>
    )
}

export default Home