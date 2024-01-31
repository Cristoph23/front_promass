import { TextField } from "@mui/material";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
export default function InputText({label, ...props}: Props) {
    const id = `${label}-${props.name}`
  return (
    <div className="flex flex-col">
      <TextField
        id={id}
        label={label}
        variant="outlined"
        {...props}
      />
    </div>
  );
}
