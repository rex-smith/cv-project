import Header from "./components/headers/Header";
import EducationList from "./components/education/EducationList";
import ProfessionList from "./components/profession/ProfessionList";
import InterestList from "./components/interests/InterestList";
import "./styles/reset.css";
import "./styles/app.css";

function App() {
  return (
    <div>
      <Header />
      <div>
        <h1>Education</h1>
      </div>
      <div>
        <h1>Professional Experience</h1>
      </div>
      <div>
        <h1>Interests</h1>
      </div>
    </div>
  );
}

export default App;
