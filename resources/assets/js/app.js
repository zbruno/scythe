import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import Urls from './urls';

// Stores
import authStore from './stores/authStore';
import alertStore from './stores/alertStore';
import gameStore from './stores/gameStore';

// Views
import Layout from './layout';
import Home from './views/home';

const stores = {
  gameStore,
  alertStore,
  authStore
};

class App extends React.Component {
  componentDidMount() {
    if (authStore.isLoggedIn) {
      authStore.fetchUser();
    }
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route exact path={Urls.home} component={Home} />
          <Route path="*" component={() => <Redirect to={Urls.home} />} />
        </Switch>
      </Layout>
    );
  }
}

render(
  <Provider {...stores}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('ScytheApp')
);
