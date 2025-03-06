import { useEffect, useState } from "react";
import NavigationBar from "./components/navigation_bar";
import AddData from "./components/add_data";
import ShowData from "./components/show_data";
import { Routes, Route } from "react-router";
import SinglePost from "./pages/single-post";
import { ToastContainer, toast } from "react-toastify";
export interface IData {
  id: number | string;
  views: number;
  title: string;
  description: string;
  username: string;
}

function App() {
  let [posts, setPosts] = useState([] as Array<IData>);
  let [title, setTitle] = useState("" as string);

  const fetchData = () => {
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts([...data]);
      })
      .catch((error) => console.log("error", error));
  };

  const addData = (newPost: IData) => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({
        title: newPost.title,
        description: newPost.description,
        username: newPost.username,
        id: posts.length,
        views: 0,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        fetchData();
        toast("Hey you data has been updated");
      })
      .catch((error) => console.log("error", error));
  };

  const updateViews = async (id: string | number, increased_view: number) => {
    try {
      await fetch("http://localhost:3000/posts/" + id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          views: increased_view,
        }),
      });
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="add-data" element={<AddData addData={addData} />} />

        <Route path="posts">
          <Route
            index
            element={<ShowData posts={posts} updateView={updateViews} />}
          />
          <Route
            path=":post_id"
            element={<SinglePost updateViews={updateViews} />}
          />
        </Route>
        <Route
          path="home"
          element={
            <ShowData
              posts={posts}
              updateView={updateViews}
              addData={addData}
            />
          }
        />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
