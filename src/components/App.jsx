import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import NotFound from './NotFound';
import KegList from './KegList';
import NewKeg from './NewKeg';
import EditKeg from './EditKeg';
import wood_background from '../assets/images/wood_background.jpg';


const App = () => {
  return (
    <div className="page_background">
      <style jsx>{`
                .page_background {
                    background: url(${wood_background}) no-repeat center center fixed;
                    min-height: 100vh;
                    background-size: cover;
                    overflow: hidden;
                }
            `}</style>
      <Header />
      <Switch>
        <Route exact path='/' component={Main} />
        <Route path='/list' component={KegList} />
        <Route path='/new' component={NewKeg} />
        <Route path='/edit' component={EditKeg} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;