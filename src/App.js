import React from "react";
import "./App.css";
import Routes from "./Routes";

function App() {
  return (
    <div className="App_container">
      <div className="preview_header" >
        <div className="preview_logo">
          <a href="/"><h4><b>BB BROTHERS</b></h4></a>

        </div>
        <div className="preview_action">
          <div className="preview_action_buy">
            <a className="header-buy-now e-btn--3d -color-primary" href="/NotFound">Buy now</a>
          </div>
        </div>
      </div>
      <Routes />

    </div>
  );
}

export default App;
