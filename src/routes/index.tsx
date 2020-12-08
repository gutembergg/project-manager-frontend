import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import SignInClient from '../pages/SignInClient'
import SignInDev from '../pages/SignInDev'
import SignUpDev from '../pages/SignUpDev'
import Start from '../pages/Start'

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Start} />
      <Route path="/signin/dev" component={SignInDev} />
      <Route path="/signin/client" component={SignInClient} />
      <Route path="/signup/dev" component={SignUpDev} />
      <Redirect to="/" />
    </Switch>
  )
}

export default Routes
