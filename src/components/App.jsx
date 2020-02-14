import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from './Main';
import NotFound from './NotFound';
import KegList from './KegList';


const App = () => {
    return (
        <div>
            {/* <Header /> */}
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/keg-list' component={KegList} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default App