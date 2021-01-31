import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import MapView from '@components/MapView'

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <MapView/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default App
