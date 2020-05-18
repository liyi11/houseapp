import React, { Component } from 'react'
// 引入路由
import { HashRouter, Switch, Route } from 'react-router-dom'
// 引入一级导航
import City from '../pages/city/City'
import Login from '../pages/login/Login'
import Nav from '../pages/nav/Nav'
import Register from '../pages/register/Register'
export default class Mainrouter extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                   <Route path='/'  exact component={Nav} ></Route>
                   <Route path='/city'  component={City}></Route>
                   <Route path='/register'  component={Register}></Route>
                   <Route path='/login'  component={Login}></Route>
                   <Route component={Nav}></Route>
                </Switch>
            </HashRouter>
        )
    }
}
