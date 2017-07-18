import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Talker from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Talker />, document.getElementById('root'));
registerServiceWorker();
