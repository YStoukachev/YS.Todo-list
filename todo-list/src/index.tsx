import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppWithRedux from "./App-with-redux";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          Component={() => {
            return (
              <div
                style={{
                  textAlign: "center",
                }}
              >
                <div>
                  <Link to="/app-with-hooks">Go to app with hooks</Link>
                </div>
                <div>
                  <Link to="/app-with-redux">Go to app with redux</Link>
                </div>
              </div>
            );
          }}
        />
        <Route path="/app-with-hooks" Component={App} />
        <Route path="/app-with-redux" Component={AppWithRedux} />
      </Routes>
    </Router>
  </React.StrictMode>
);
