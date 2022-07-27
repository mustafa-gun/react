import Navbar from "./components/menu";
import "./styles/App.css";
import Container from "./components/adPlace";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Container />
      </div>
    </div>
  );
}

export default App;
