import { LandingScreen, DashBoardScreen} from './screen'
import { BrowserRouter as Router, Route} from 'react-router-dom'

const  App = () => {
  return (
    <Router>
      <Route exact path="/" component={LandingScreen}/>
      <Route path="/dashboard" component={DashBoardScreen}/>
       
    </Router>
  );
}

export default App;
