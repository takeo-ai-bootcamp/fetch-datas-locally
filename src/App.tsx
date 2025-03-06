import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import NavigationBar from "./components/navigation_bar";
import AddData from "./components/add_data";
import ShowData from "./components/show_data";
import { Routes, Route } from "react-router";
import SinglePost from "./pages/single-post";

export interface IData {
  id: number;
  title: string;
  views: number;
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

  const addData = () => {
    fetch("http://localhost:3000/posts", {
      method: "POST",
      body: JSON.stringify({ title: title, id: posts.length, views: 400 }),
    })
      .then((response) => response.json())
      .then((data) => {
        fetchData();
      })
      .catch((error) => console.log("error", error));
  };

  const updateViews = async (id: string | number, increased_view: number) => {
    try {
      const response = await fetch("http://localhost:3000/posts/" + id, {
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
        <Route
          path="add-data"
          element={<AddData addData={addData} setTitle={setTitle} />}
        />

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
          element={<ShowData posts={posts} updateView={updateViews} />}
        />
      </Routes>
    </>
  );
}

export default App;
