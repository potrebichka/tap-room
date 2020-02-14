import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Header from './Header'
import Main from './Main'
import AboutUs from './AboutUs'
import OurTeam from './OurTeam'
import NotFound from './NotFound'
import Portfolio from './Portfolio'
import Events from './Events'

const App = () => {
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path='/' component={Main} />
                <Route path='/about-us' component={AboutUs} />
                <Route path='/our-team' component={OurTeam} />
                <Route path='/portfolio' component={Portfolio} />
                <Route path='/events' component={Events} />
                <Route component={NotFound} />
            </Switch>
        </div>
    )
}

export default App