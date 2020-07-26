import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './style.css';

//import './App.css';
import * as serviceWorker from './serviceWorker';
import TodoContainer from './components/TodoContainer';

ReactDOM.render(<TodoContainer/>, document.getElementById('root'));

serviceWorker.unregister();
