import React from "react";
import './App.scss';

import Attribution from "./ui/components/Attribution/Attribution";
import AppRouter from "./router/AppRouter";

function App() {

  return (
    <div className="App">
      <AppRouter />
      <Attribution />
    </div>
  );
}

export default App;
