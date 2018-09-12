import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { browserHistory, Router } from 'react-router';
import { routes } from './routes';

const store = createStore(rootReducer)

ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
          {routes}
        </Router>
    </Provider>,
    document.getElementById('app')
);
