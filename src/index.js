import './index.css';
import React               from 'react';
import ReactDOM            from 'react-dom';
import { Route }           from 'react-router';
import { ConnectedRouter } from 'react-router-redux';
import { Provider }        from 'react-redux';
import Layout              from './common/layout';
import Counter             from './pages/counter';
import Voting              from './pages/voting';
import { store, history }  from './store';

const application = <Provider store={ store }>
  <ConnectedRouter history={ history }>
    <Layout>
      <Route path='/' exact   component={ Counter } />
      <Route path='/counter'  component={ Counter } />
      <Route path='/voting'   component={ Voting } />
    </Layout>
  </ConnectedRouter>
</Provider>;

ReactDOM.render(application, document.getElementById('root'));
