import { NavLink } from "react-router-dom";
import CircleButton from "../components/ui/CircleButton";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";

const MySwal = withReactContent(Swal);

async function deletePost(id) {
  try {
    const response = await axios.delete(
      `${process.env.URL_PATH}/posts/deletePost/${id}`
    );
    MySwal.fire({
      icon: "success",
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    MySwal.fire({
      icon: "error",
      title: error,
      showConfirmButton: false,
      timer: 1500,
    });
  }
}

export const optionsTable = {
  download: false,
  viewColumns: false,
  print: false,
  filter: false,
  textLabels: {
    pagination: {
      rowsPerPage: "Posts",
    },
  },
};

export const columnsTable = (fetch) => {
  return [
    { name: "id", options: { display: false } },
    { name: "title", label: "Titulo" },
    { name: "author", label: "Autor" },
    {
      name: "content_post",
      label: "Contenido del Post",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return (
            <div>{value.slice(0, 70) + (value.length > 70 ? "..." : "")}</div>
          );
        },
      },
    },
    {
      name: "createdAt",
      label: "Fecha de creación",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => {
          return <div>{new Date(value).toLocaleString("es-MX")}</div>;
        },
      },
    },
    {
      name: "Acciones",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => {
          return (
            <div>
              <NavLink to={`/update-post/${tableMeta.rowData[0]}`}>
                <CircleButton>
                  <EditIcon />
                </CircleButton>
              </NavLink>
              <NavLink to={`/show-post/${tableMeta.rowData[0]}`}>
                <CircleButton color="success">
                  <VisibilityIcon />
                </CircleButton>
              </NavLink>
              <CircleButton
                color="danger"
                onClick={async () => {
                  await deletePost(tableMeta.rowData[0]);
                  await fetch();
                }}
              >
                <DeleteIcon />
              </CircleButton>
            </div>
          );
        },
      },
    },
  ];
};
