import React from 'react'
import { Button } from '@material-ui/core';

import "../styles/Home.css"

function Game() {
    return (
        <>
        <div class="center">
            <h2>Nouvelle partie</h2>
            <Button variant="contained" color="primary" >
                <a href="/question">GO !</a>
            </Button>
        </div>
        </>
    )
}

export default Game