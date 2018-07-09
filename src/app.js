import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import Dropbox from 'dropbox';
import DropboxTeam from 'dropbox';
import 'whatwg-fetch';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<AppRouter />, document.getElementById('app'));
