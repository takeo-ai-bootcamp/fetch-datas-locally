import { useEffect, useState } from "react";
import NavigationBar from "./components/navigation_bar";
import AddData from "./components/add_data";
import ShowData from "./components/show_data";
import { Routes, Route } from "react-router";
import SinglePost from "./pages/single-post";
import { ToastContainer, toast } from "react-toastify";
import { PostContextProvider } from "./context/post/Post";
import SimpleComponent from "./components/Simple_component";
import Posts from "./pages/r-posts";

function App() {
  let [posts, setPosts] = useState([] as Array<IData>);
  let [title, setTitle] = useState("" as string);

  return (
    <>
      <NavigationBar />
      <PostContextProvider>
        <Routes>
          <Route path="add-data" element={<AddData />} />

          <Route path="posts">
            <Route index element={<ShowData />} />
            <Route path=":post_id" element={<SinglePost />} />
          </Route>
          <Route path="home" element={<Posts />} />
        </Routes>
      </PostContextProvider>

      <ToastContainer />
    </>
  );
}

export default App;
