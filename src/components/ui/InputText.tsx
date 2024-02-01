import { TextField } from "@mui/material";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function InputText({register, ...props}: Props) {
    const id = `${props.label}-${props.name}`
  return (
    <div className="flex flex-col">
      <TextField
        id={id}
        label={props.label}
        variant="outlined"
        {...props}
        {...register}
      />
    </div>
  );
}
