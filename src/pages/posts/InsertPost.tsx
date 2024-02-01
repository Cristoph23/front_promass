import { useForm } from "react-hook-form";
import InputText from "../../components/ui/InputText";
import Button from "../../components/ui/Button";
import axios from "axios";
import withReactContent from "sweetalert2-react-content";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { dataInput } from "../../helpers/dataInputs";

export default function InsertPost() {
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal);
  async function onSubmit(data) {
    console.log(data);

    const response = await axios.post(
      `${process.env.URL_PATH}/posts/createPost`,
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

    reset();

    return navigate("/posts");
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-5">
      {dataInput.map((data, index) => (
        <div className={data.classGrid}>
          <InputText
            key={index}
            label={data.label}
            name={data.name}
            multiline={data.multiline}
            register={register(data.name, {
              required: {
                value: true,
                message: "El campo es requerido",
              },
            })}
            errors={errors}
          />
        </div>
      ))}
      <div className="grid col-span-2">
        <Button type="submit">Agregar</Button>
      </div>
    </form>
  );
}
