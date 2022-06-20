import { DataGrid } from "@mui/x-data-grid";
import { Link } from "react-router-dom";

import "./datatable.scss";
import { userColumns, userRows } from "../../datasources";

const Datatable = () => {
   const actionColumn = [
      {
         field: "action",
         headerName: "Action",
         width: 200,
         renderCell: () => (
            <div className="cellAction">
               <Link to="/products/test" style={{ textDecoration: "none" }}>
                  <div className="viewButton">View</div>
               </Link>
               <div className="deleteButton">Delete</div>
            </div>
         ),
      },
   ];

   return (
      <div className="datatable">
         <div className="datatableTitle">Add new user </div>
         <DataGrid
            rows={userRows}
            columns={userColumns.concat(actionColumn)}
            pageSize={5}
            rowsPerPageOptions={[5]}
            checkboxSelection
         />
      </div>
   );
};

export default Datatable;
