import './index.css';
import React               from 'react';
import ReactDOM            from 'react-dom';
import { Route }           from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider }        from 'react-redux';
import App                 from './components/app';
import Counter             from './components/counter';
import Voting              from './components/voting';
import { store, history }  from './store';

const application = <Provider store={ store }>
  <ConnectedRouter history={ history }>
    <App>
      <Route path='/' exact   component={ Counter } />
      <Route path='/counter'  component={ Counter } />
      <Route path='/voting'   component={ Voting } />
    </App>
  </ConnectedRouter>
</Provider>;

ReactDOM.render(application, document.getElementById('root'));
