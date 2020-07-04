import React from "react";
import "./global.less";
import { useHistory } from "react-router-dom";

function App() {
  const history = useHistory();
  return (
    <div
      className="App"
      onClick={() => {
        history.push("/count");
      }}
    >
      <header className="App-header">
        <img src="/static/logo.svg" className="App-logo" alt="logo" />
        <p>
          React、Redux、Rematch、React-router、TypeScript、JavaScript、Postcss、
          Less、Webpack
        </p>
        <br />
        <p>
          Edit <code>src/page/index.js</code> and save to reload.
        </p>
        <br />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
