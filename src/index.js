import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './components/App/App.component';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



/*

import React from "react";
import ReactDOM from "react-dom";
class Welcome extends React.Component {
  render() {
    return <h1>webpack_cra - Custom Webpack Config for React Applications</h1>;
  }
}
ReactDOM.render(<Welcome />, document.getElementById("root"));

*/
