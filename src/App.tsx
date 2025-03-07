import { useEffect, useState } from "react";
import NavigationBar from "./components/navigation_bar";
import AddData from "./components/add_data";
import ShowData from "./components/show_data";
import { Routes, Route } from "react-router";
import SinglePost from "./pages/single-post";
import { ToastContainer, toast } from "react-toastify";
import { PostContextProvider } from "./context/Post";
import SimpleComponent from "./components/Simple_component";

function App() {
  let [posts, setPosts] = useState([] as Array<IData>);
  let [title, setTitle] = useState("" as string);

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
        // fetchData();
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

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path="add-data" element={<AddData addData={addData} />} />

        <Route path="posts">
          <Route
            index
            element={
              <PostContextProvider>
                <ShowData />
              </PostContextProvider>
            }
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

      <SimpleComponent />
      <PostContextProvider>
        <SimpleComponent />
      </PostContextProvider>
    </>
  );
}

export default App;
