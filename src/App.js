import React from "react";
import Header from "./components/headers/Header";
import EducationList from "./components/education/EducationList";
import ProfessionList from "./components/profession/ProfessionList";
import InterestList from "./components/interests/InterestList";
import "./styles/reset.css";
import "./styles/app.css";

class App extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Header />
        <div>
          <h1>Education</h1>
          <EducationList />
        </div>
        <div>
          <h1>Professional Experience</h1>
          <ProfessionList />
        </div>
        <div>
          <h1>Interests</h1>
          <InterestList />
        </div>
      </div>
    );
  }
}

export default App;
