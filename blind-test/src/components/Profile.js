import React from 'react'
import { useEffect, useState } from "react";
import {Button} from '@material-ui/core'
import '../styles/Home.css'
import { useSelector } from 'react-redux'

function Profile() {
    const player = useSelector((state) => state.user)
    console.log(player)
    // const [isAdmin, setIsAdmin] = useState(data.backOffice);
    return (
        <div className="center">
            <img src="https://icotar.com/initials/user" alt="avatar" style={{width: 50}}/>
            {/* <h2>Hello {props.name}</h2> */}
            <h2>Hello {player.name}</h2>
            <Button variant="contained" color="primary">
                <a href="/logout">Sign Out</a>
            </Button>
        </div>
    )
}

export default Profile