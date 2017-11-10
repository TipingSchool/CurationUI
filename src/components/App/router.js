import React from 'react';
import {Switch,Route} from 'react-router-dom';
import Categories from '../Categories/App';
import Feeds from '../feeds/App';
import Addrss from '../feeds/Addrss'

const App = () =>(
    <div>
        <Switch>
            <Route exact path='/feeds' component={Feeds}/>
            <Route exact path='/feeds/:cat' component={Feeds}/>
            <Route exact path='/' component={Categories}/>
            <Route exact path='/search' component={Feeds}/>
            <Route exact path='/add' component={Addrss}/>
            
        </Switch>
       
    </div>
)

export default App;