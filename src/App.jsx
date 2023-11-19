import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home/Home";
import Features from "./components/Features"
import Section3 from "./components/Section3"
import Section4 from "./components/Section4"
import "./App.css"


function App() {
  return (
    <div className="App">
      <Header />
      <Home/>
      <Features/>
      <Section3/>
      <Section4/>
      <Footer/>
    </div>
  );
}

export default App;