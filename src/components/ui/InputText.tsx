import { TextField } from "@mui/material";
import ErrorMessage from "../ErrorMessage";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function InputText({ errors = [], register, ...props }: Props) {
  const error = errors[props.name]?.message;
  const id = `${props.label}-${props.name}`;
  return (
    <div className="flex flex-col">
      <TextField
        id={id}
        label={props.label}
        variant="outlined"
        {...props}
        {...register}
      />
      <ErrorMessage error={error}/>
    </div>
  );
}
