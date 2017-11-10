import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Categories from '../Categories/App';
import Feeds from '../feeds/App';

const App = () =>(
    <div>
        <Switch>
            
            <Route exact path='/' component={Feeds}/>
            <Route exact path='/feeds' component={Feeds}/>
            <Route exact path='/categories' component={Categories}/>
            <Route exact path='/search' component={Feeds}/>
        </Switch>
       
    </div>
)

export default App;