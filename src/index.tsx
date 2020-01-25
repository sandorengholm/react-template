import 'core-js';
import 'regenerator-runtime/runtime';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
// Styles entry
import './index.scss';
// Components
import { HelloWorld } from './components/hello-world/hello-world.component';

const App = () => <HelloWorld />;

ReactDOM.render(<App />, document.getElementById('app'));
