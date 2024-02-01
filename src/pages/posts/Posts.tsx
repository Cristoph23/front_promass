import { NavLink } from "react-router-dom";
import Button from "../../components/ui/Button";
import Table from "../../components/ui/Table";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Posts() {
  const [posts, setPosts] = useState([]);

  async function fetch() {
    const res = await axios.get(`${process.env.URL_PATH}/posts/listAllPosts`);
    setPosts(res.data);
  }

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div>
      <div className="w-full flex items-center justify-end mb-2">
        <NavLink to="/insert-post">
          <Button>Agregar Post</Button>
        </NavLink>
      </div>
      <Table datos={posts} fetch={fetch} />
    </div>
  );
}
