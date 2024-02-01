import { useForm } from "react-hook-form";
import InputText from "../../components/ui/InputText";
import Button from "../../components/ui/Button";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

export default function InsertPost() {
  const { handleSubmit, reset, register } = useForm();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  async function onSubmit(data) {
    console.log(data);

    const response = await axios.post(`${process.env.URL_PATH}/posts/createPost`, {
      title: data.title,
      author: data.author,
      content_post: data.content_post
    })

    MySwal.fire({
      icon: "success",
      title: response.data.message,
      showConfirmButton: false,
      timer: 1500
    })

    reset();

    return navigate("/posts")

  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
      <InputText
        placeholder="Titulo"
        label="Titulo"
        name="title"
        register={register("title")}
      />
      <InputText
        placeholder="Autor"
        label="Autor"
        name="author"
        register={register("author")}
      />
      <div className="col-span-2">
        <InputText
          placeholder="Contenido"
          label="Contenido"
          name="content_post"
          register={register("content_post")}
        />
      </div>
      <div className="grid col-span-2">
        <Button type="submit">Agregar</Button>
      </div>
    </form>
  );
}
