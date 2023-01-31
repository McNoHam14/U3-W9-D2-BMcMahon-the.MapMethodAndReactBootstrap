import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav.jsx";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <div>
      <MyNav />

      <Welcome />

      <AllTheBooks />

      <footer>
        <MyFooter />
      </footer>
    </div>
  );
}

export default App;
