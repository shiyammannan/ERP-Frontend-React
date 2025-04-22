import React from 'react';
import { AgGridReact } from "ag-grid-react";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

const EmployeeList = ({ columnDefs, rowData, handleToggle }) => {
  return (
    <div className="ag-theme-alpine mt-4" style={{ height: 400, width: '100%' }}>
      <AgGridReact
        columnDefs={columnDefs}
        rowData={rowData}
        defaultColDef={{
          sortable: true,
          flex: 1,
          minWidth: 100,
        }}
        pagination={true}
        paginationPageSize={10}
      />
    </div>
  );
};

export default EmployeeList;
