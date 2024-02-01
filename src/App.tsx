import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import InsertPost from "./pages/posts/InsertPost";
import Posts from "./pages/posts/Posts";
import UpdatePost from "./pages/posts/UpdatePost";
import ShowPost from "./pages/posts/ShowPost";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/insert-post" element={<InsertPost />} />
          <Route path="/show-post/:id" element={<ShowPost />} />
          <Route path="/update-post/:id" element={<UpdatePost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
