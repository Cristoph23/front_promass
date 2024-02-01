import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function ShowPost() {
  const { id } = useParams();

  const [post, setPost] = useState({
    title: "",
    createdAt: "",
    content_post: "",
    author: ""
  });

  useEffect(() => {
    axios.get(`${process.env.URL_PATH}/posts/viewPost/${id}`).then((res) => {
      setPost(res.data);
    });
  }, []);
  return (
    <div className="px-2">
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          {post.title}
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Fecha de publicacion: {new Date(post.createdAt).toLocaleDateString("es-MX")}
        </p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Autor
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {post.author}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              Contenido
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {post.content_post}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
