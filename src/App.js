import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import SearchBar from "./components/SearchBar";
import PropertyContainer from "./components/PropertyContainer";
import TopHighlightedProject from "./components/TopHighlightedProject";
import PropertyContainerTwo from "./components/PropertyContainerTwo";
import AreaCovered from "./components/AreaCovered";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <SearchBar />
      <PropertyContainer />
      <TopHighlightedProject />
      <PropertyContainerTwo />
      <AreaCovered/>
    </div>
  );
}

export default App;
