import "./App.css";
import SearchEngine from "./SearchEngine.jsx";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather App</h1>
        <SearchEngine />
        <footer>
          Coded by
          <a
            href="https://www.linkedin.com/in/kayleigh-rundquist-00ab9a85/"
            target="_blank"
          >
            Kayleigh Rundquist
          </a>
          , open-sourced on
          <a
            href="https://github.com/Keilikvist/vite-weather-react-app"
            target="_blank"
          >
            GitHub
          </a>
          , and hosted on
          <a href="https://vite-weather-react-app.netlify.app/" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
