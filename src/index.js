import './index.css';
import React        from 'react';
import ReactDOM     from 'react-dom';
import { Provider } from 'react-redux';
import App          from './components/app';
import store        from './store';

const application = <Provider store={ store }>
  <App/>
</Provider>;

ReactDOM.render(application, document.getElementById('root'));
