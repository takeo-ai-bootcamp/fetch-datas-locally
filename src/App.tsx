import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavigationBar from "./components/navigation_bar";

interface IData {
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
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("posts", posts);
  }, [posts]);

  return (
    <>
      <NavigationBar />

      <div className="content-app">
        <div>
          <input
            type="text"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
          <button onClick={addData}>Add data</button>
        </div>

        {posts.map((post, index) => {
          return (
            <div
              className="box"
              key={index}
              style={{
                display: "flex",
                border: "1px solid red",
                flexDirection: "column",
                margin: "10px",
              }}
            >
              <p> id: {post.id}</p>

              <p>{post.title}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
