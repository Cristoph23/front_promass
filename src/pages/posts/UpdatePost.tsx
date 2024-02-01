import { useForm } from "react-hook-form";
import InputText from "../../components/ui/InputText";
import Button from "../../components/ui/Button";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function UpdatePost() {
  const { id } = useParams();
  const [post, setPost] = useState({
    title: "",
    author: "",
    content_post: "",
  });
  const { handleSubmit, register, setValue } = useForm();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);

  async function onSubmit(data) {
    console.log(data);

    try {
      const response = await axios.put(
        `${process.env.URL_PATH}/posts/updatePost/${id}`,
        {
          title: data.title,
          author: data.author,
          content_post: data.content_post,
        }
      );

      MySwal.fire({
        icon: "success",
        title: response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });

      return navigate("/posts");
    } catch (error) {
      MySwal.fire({
        icon: "error",
        title: error,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }

  useEffect(() => {
    axios.get(`${process.env.URL_PATH}/posts/viewPost/${id}`).then((res) => {
      setPost(res.data);
      setValue("title", res.data.title);
      setValue("author", res.data.author);
      setValue("content_post", res.data.content_post);
    });
  }, [setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
      <InputText
        placeholder="Titulo"
        label="Titulo"
        name="title"
        defaultValue={post.title}
        register={register("title")}
      />
      <InputText
        placeholder="Autor"
        label="Autor"
        name="author"
        defaultValue={post.author}
        register={register("author")}
      />
      <div className="col-span-2">
        <InputText
          placeholder="Contenido"
          label="Contenido"
          name="content_post"
          defaultValue={post.content_post}
          register={register("content_post")}
        />
      </div>
      <div className="grid col-span-2">
        <Button type="submit">Editar</Button>
      </div>
    </form>
  );
}
