import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import register from './src/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
register();
