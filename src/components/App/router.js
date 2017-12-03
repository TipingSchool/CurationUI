import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Categories from '../Categories/App';
import Feeds from '../feeds/App';
import Add from '../feeds/Add'

const App = () =>(
    <div>
        <Switch>
            <Route exact path='/' component={Feeds}/>
            <Route exact path='/feeds/:cat' component={Feeds}/>
            <Route exact path='/cat' component={Categories}/>
            <Route exact path='/search' component={Feeds}/>
            <Route exact path='/add' component={Add}/>
            
        </Switch>
       
    </div>
)

export default App;