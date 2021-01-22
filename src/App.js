import './App.css';
import Team from "./Components/Team";
import React, { useState } from 'react';
import Games from "./Components/Games";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Link } from "react-router-dom";
function App() {

  
  const [myclass, setmyclass] = useState("team");
  const [myclass2,setmyclass2]=useState("game");

  

  return (
    <div className="App">
      <Router>
        <div className="container mt-3">
          <h2 className="text-center mb-5" style={{color:"rgb(248, 110, 29)"}}>NBA REPO</h2>
          <div className="row">

            <div className="col px-0">
              <div className="d-grid gap-2">
                <Link className={myclass} to="/" role="button" onClick={() => {
                  setmyclass("team");
                  setmyclass2("game");
                  <div></div>
                }}>NBA Teams</Link>
              </div>
            </div>
            <div className="col px-0">
              <div className="d-grid gap-2">
                <Link className={myclass2} to="/games" role="button" onClick={() => {
                    setmyclass("game");
                    setmyclass2("team");
                  <div></div>
                }}>NBA Games</Link>
              </div>
            </div>

          </div>

          <Route path="/" component={Team} exact />
          <Route path="/games" component={Games} exact />

        </div>
      </Router>
    </div>
  );
}

export default App;
