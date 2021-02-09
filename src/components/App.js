import React from "react";
import './App.css';

import Attribution from "./Attribution/Attribution";
import AppRouter from "../router/AppRouter";

function App() {

  return (
    <div className="App">
      <AppRouter />
      <Attribution />
    </div>
  );
}

export default App;
