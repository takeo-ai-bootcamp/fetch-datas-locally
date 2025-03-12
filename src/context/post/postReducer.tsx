import { toast } from "react-toastify";
import { IData } from "./Post";

type IState = IData[];

export enum ACTIONTYPES {
  FETCH_DATA = "fetching_posts_data",
}

interface FETCH_POSTS_DATA {
  type: ACTIONTYPES.FETCH_DATA;
  payload: IData[];
}

const PostReducer = (
  state: IState = { data: [] },
  action: FETCH_POSTS_DATA
) => {
  if (action.type === ACTIONTYPES.FETCH_DATA) {
    return [...action.payload!];
  }
  return state;
};

const fetchPosts = () => {
  return fetch("http://localhost:3000/posts")
    .then((response) => response.json())
    .then((data) => {
      return [...data];
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

export default PostReducer;
