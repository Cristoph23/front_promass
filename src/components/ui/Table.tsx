import MUIDataTable from "mui-datatables";
import { columnsTable, optionsTable } from "../../helpers/dataTable";


export default function Table({datos, fetch}) {
  return (
    <MUIDataTable
      title={"Publicaciones"}
      data={datos}
      columns={columnsTable(fetch)}
      options={optionsTable}
    />
  );
}
