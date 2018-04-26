import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Home from './containers/home/home';
import Category from './containers/category/category';
import Shopping from './containers/shopping/shopping';
import User from './containers/user/user';
import store from './redux/store'

ReactDOM.render((
  <Provider store = {store}>
    <BrowserRouter>
      <Switch>
        <Route path='/category' component={Category}/>
        <Route path='/shopping' component={Shopping}/>
        <Route path='/user' component={User}/>
        <Route component={Home}/> {/*默认路由组件*/}
      </Switch>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));