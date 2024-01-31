import Table from "../../components/ui/Table";

export default function Posts() {
  return (
    <div>
        <div className="w-full flex items-center justify-end mb-2">
            <button className="bg-green-500 hover:bg-green-600 text-white rounded-md p-2">Agregar Post</button>
        </div>
        <Table/>
    </div>
  )
}
