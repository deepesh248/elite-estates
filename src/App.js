import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import SearchBar from "./components/SearchBar";
import PropertyContainer from "./components/PropertyContainer";
import TopHighlightedProject from "./components/TopHighlightedProject";
import PropertyTwo from "./components/PropertyTwo";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <SearchBar />
      <PropertyContainer />
      <TopHighlightedProject />
      <PropertyTwo/>
    </div>
  );
}

export default App;
