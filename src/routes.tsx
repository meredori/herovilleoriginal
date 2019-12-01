
import * as React from 'react'
import { Route, Switch } from 'react-router-dom'
import indexPage from './pages/indexPage'


const Routes: React.SFC = () => (
        <Switch>
            <Route path="/" component={indexPage}>
            </Route>
            <Route component={() => <div>Not Found</div>} />
        </Switch>  
)
export default Routes