import MUIDataTable from "mui-datatables";
import { optionsTable } from "../../helpers/dataTable";
const columns = ["Name", "Company", "City", "State"];

const data = [
  ["Joe James", "Test Corp", "Yonkers", "NY"],
  ["John Walsh", "Test Corp", "Hartford", "CT"],
  ["Bob Herm", "Test Corp", "Tampa", "FL"],
  ["James Houston", "Test Corp", "Dallas", "TX"],
];


export default function Table() {
  return (
    <MUIDataTable
      title={"Publicaciones"}
      data={data}
      columns={columns}
      options={optionsTable}
    />
  );
}
