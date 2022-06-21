import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Inventario from '../pages/ChartPage'
import Login from '../pages/LoginPage'

const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/inventario' component={Inventario} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;