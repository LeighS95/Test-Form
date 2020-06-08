import React, { Component, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Global Components
import { Header, Footer } from './global';

// Context
import { UserProvider, UserContext } from './context/UserContext';

// Pages
import LandingPage from './pages/LandingPage';
import LoginForm from './form/LoginForm';
import RegisterForm from './form/RegisterForm';
import PeoplePage from './pages/PeoplePage';
import PostsPage from './pages/PostsPage';

// Styles
import './App.css';
import { PersonProvider } from './context/PeopleContext';

const ProtectedRoute = ({ path, component }) => {
  const user = useContext(UserContext);
  if (user.user.loggedIn === true) {
    return <Route path={path} exact component={component} />;
  }
  if (window.location.pathname === '/') {
    return <Redirect to="/" />;
  }
  return <Redirect to="/login" />;
};

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <UserProvider>
            <PersonProvider>
              <Header />
              <Route path="/" exact component={LandingPage} />
              <Route path="/login" component={LoginForm} />
              <Route path="/register" component={RegisterForm} />
              <ProtectedRoute path="/people" component={PeoplePage} />
              <ProtectedRoute path="/people/:id/posts" component={PostsPage} />
              <Footer />
            </PersonProvider>
          </UserProvider>
        </Switch>
      </Router>
    );
  }
}

export default App;
