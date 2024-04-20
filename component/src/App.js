import "bulma/css/bulma.css";
import Course from "./components/Course";
import Angular from "./images/angular.jpg";
import Bootstrap from "./images/bootstrap5.png";
import CSharp from "./images/ccsharp.png";
import Web from "./images/kompleweb.jpg";

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column">
              <Course
                image={Angular}
                title="Angular"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            <div className="column">
              <Course
                image={CSharp}
                title="C#"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
            <div className="column">
              <Course
                image={Web}
                title="Web"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
