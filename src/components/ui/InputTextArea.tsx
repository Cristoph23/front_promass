import { TextField } from "@mui/material";
import ErrorMessage from "../ErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function InputText({
  errors = [],
  multiline = false,
  register,
  ...props
}: Props) {
  const error = errors[props.name]?.message;
  const id = `${props.label}-${props.name}`;
  return (
    <div className="flex flex-col">
      <TextAr
        id={id}
        label={props.label}
        multiline={multiline}
        variant="outlined"
        {...props}
        {...register}
      />
      <ErrorMessage error={error} />
    </div>
  );
}
