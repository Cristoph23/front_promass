import InputText from "../../components/ui/InputText";

export default function InsertPost() {
  return (
    <form className="grid grid-cols-2 gap-5">
      <InputText placeholder="Titulo" label="Titulo" name="title" />
      <InputText placeholder="Autor" label="Autor" name="author" />
      <div className="col-span-2">
        <InputText placeholder="Contenido" label="Contenido" name="content" />
      </div>
    </form>
  );
}
