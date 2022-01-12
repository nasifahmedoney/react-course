import {Route,Switch} from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupPage from './pages/NewMeetups';


function App(){
  return (
        <div>
          <Switch>
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/favorite'>
            <FavoritesPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          </Switch>
          
          </div>
          );
}

export default App;