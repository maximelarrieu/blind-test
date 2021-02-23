import React from 'react'

import {AppBar, Toolbar, Button} from '@material-ui/core';

function NavBar() {
    return (
        <AppBar position="static">
            <Toolbar>
                <Button>
                    <a href="/">Game</a>
                </Button>
                <Button>
                    <a href="/profile">Profile</a>
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar