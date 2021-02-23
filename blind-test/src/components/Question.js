import React from 'react'
import { Button } from '@material-ui/core';


function Question() {
    return (
        <>
        <h1>QUESTION</h1>
        <div>
            <h2>Question : </h2>
            <p>Quel artiste interprète cette chanson?</p>
        </div>
        <div>
            <h2>Réponses : </h2>
            <div>
                <Button variantt="contained" color="primary">Réponse 1</Button>
                <Button variantt="contained" color="primary">Réponse 2</Button>
            </div>
            <div>
                <Button variantt="contained" color="primary">Réponse 3</Button>
                <Button variantt="contained" color="primary">Réponse 4</Button>
            </div>
        </div>
        </>
    )
}

export default Question