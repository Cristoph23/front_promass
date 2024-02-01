export default function ErrorMessage({ error }) {
  if (!error) return null;
  return <span className="text-red-500">{error}</span>;
}
