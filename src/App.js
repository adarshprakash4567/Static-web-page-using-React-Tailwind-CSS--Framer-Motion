import Hero from "./components/Hero";
import Group from "./components/Group";
import Section3 from "./components/Section3";
import Card from "./components/Card";
import "./index.css";
import Register from "./components/Register";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="relative bg-[#140730] h-full w-fit">
      <Hero />
      <Group />
      <Section3 />
      <Card />
      <Register />
      <Footer/>
    </div>
  );
}

export default App;
