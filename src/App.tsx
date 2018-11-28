import * as React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'mobx-react';
// Store
import stores from './stores';
import IndexContainer from './containers/IndexContainer';

class App extends React.Component {
  render() {
    return (
      <Provider { ...stores }>
        <Router>
          <Switch>
            <Route exact path="/" component={ IndexContainer } />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;