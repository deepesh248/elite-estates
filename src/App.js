import Navbar from "./components/Navbar";
import TopSection from "./components/TopSection";
import SearchBar from "./components/SearchBar";
import Property from "./components/Property";
import PropertyContainer from "./components/PropertyContainer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TopSection />
      <SearchBar />
      <PropertyContainer/>
    </div>
  );
}

export default App;
