import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import './styles/App.css';
import Navbar from "./components/layouts/navbar";
import Footer from "./components/layouts/footer";
import ExercisesList from "./components/pages/exercises-list";
import EditExercise from "./components/pages/edit-exercise";
import CreateExercise from "./components/pages/create-exercise";
import CreateUser from "./components/pages/create-user";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <div className="App">
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id" component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
