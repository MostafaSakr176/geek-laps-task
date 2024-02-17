import "./App.css";
import DataTable from "./components/dataTable/DataTable";
import Filters from "./components/filters/Filters";
import SearchBar from "./components/navbar/SearchBar";
import SideMenu from "./components/sidemenu/SideMenu";

function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="main">
        <div className="search-table-section">
          <SearchBar />
          <DataTable />
        </div>
        <div className="filters-section">
          <Filters />
        </div>
      </div>
    </div>
  );
}

export default App;
