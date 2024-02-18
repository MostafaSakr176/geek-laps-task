import React from "react";
import SearchBar from "../../components/navbar/SearchBar";
import DataTable from "../../components/dataTable/DataTable";
import Filters from "../../components/filters/Filters";

function AlertsPage() {
  return (
    <>
      <div className="search-table-section">
        <SearchBar />
        <DataTable />
      </div>
      <div className="filters-section">
        <Filters />
      </div>
    </>
  );
}

export default AlertsPage;
