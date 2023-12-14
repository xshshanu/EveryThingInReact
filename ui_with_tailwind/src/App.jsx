import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./Card/Card";
import FigureCard from "./Components/FigureCard";

function App() {
  return (
    <>
      <h2 className="p-3 text-semibold bg-sky-300 rounded w-50">
        TailWind Test
      </h2>

      <br /><br />
      <hr /> <br /> <br />
      
      <Card name = "Delba" description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,debitis?" />



      <br /><br />
      <hr /> <br /> <br />  
      <FigureCard  desc = "Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny." name = "Sarah Dayan" profession= "Staff Engineer, Algolia"/>
    </>
  );
}

export default App;
