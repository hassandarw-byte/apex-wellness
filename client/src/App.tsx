import { Router, Route } from 'wouter'
import Home from './pages/Home'
import Exercises from './pages/Exercises'
import Nutrition from './pages/Nutrition'
import Tracking from './pages/Tracking'
import Profile from './pages/Profile'
import Achievements from './pages/Achievements'
import Analytics from './pages/Analytics'
import Premium from './pages/Premium'
import Login from './pages/Login'
import Signup from './pages/Signup'

export default function App() {
  return (
    <Router>
      <Route path="/" component={Home} />
      <Route path="/exercises" component={Exercises} />
      <Route path="/nutrition" component={Nutrition} />
      <Route path="/tracking" component={Tracking} />
      <Route path="/profile" component={Profile} />
      <Route path="/achievements" component={Achievements} />
      <Route path="/analytics" component={Analytics} />
      <Route path="/premium" component={Premium} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
    </Router>
  )
}
