import React from 'react'
import { Button } from '@material-ui/core';

import "../styles/Home.css"

function Question() {
    return (
        <>
        <div class="center">
            <div>
                <h2>Question : </h2>
                <p>Quel artiste interprète cette chanson?</p>
            </div>
            <div>
                <h2>Réponses : </h2>
                <div>
                    <Button variant="contained" color="primary">Réponse 1</Button>
                    <Button variant="contained" color="primary">Réponse 2</Button>
                </div>
                <div>
                    <Button variant="contained" color="primary">Réponse 3</Button>
                    <Button variant="contained" color="primary">Réponse 4</Button>
                </div>
            </div>
        </div>
        </>
    )
}

export default Question