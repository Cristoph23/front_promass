import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayoutMain from "./layouts/LayoutMain";
import InsertPost from "./pages/posts/InsertPost";
import Posts from "./pages/posts/Posts";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayoutMain />}>
          <Route path="/posts" element={<Posts />} />
          <Route path="/insert-post" element={<InsertPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
