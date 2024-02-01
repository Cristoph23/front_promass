interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export default function Button({ children, ...props }: Props) {
  return (
    <button
      className="bg-green-500 hover:bg-green-600 text-white rounded-md p-2"
      {...props}
    >
      {children}
    </button>
  );
}
