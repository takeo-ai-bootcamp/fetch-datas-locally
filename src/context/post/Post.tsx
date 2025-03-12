import { createContext, useEffect, useReducer, useState } from "react";
import { toast } from "react-toastify";
import PostReducer, { ACTIONTYPES } from "./postReducer";

export interface IData {
  id: number | string;
  views: number;
  title: string;
  description: string;
  username: string;
}

interface IProps {
  children: React.ReactNode;
}

interface IContext {
  data: IData[];
  dispatch: React.ActionDispatch<any>;
}

export const postContext = createContext({} as IContext);

export const PostContextProvider = ({ children }: IProps) => {
  // const [posts, setPosts] = useState([] as IData[]); //now we are using useReducers to define and control our states

  const [posts, dispatch] = useReducer(PostReducer, [] as IData[]);

  const fetchPosts = () => {
    return fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({ type: ACTIONTYPES.FETCH_DATA, payload: data });
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <postContext.Provider value={{ data: posts, dispatch }}>
      {children}
      <div className="absolute bottom-0 right-0 btn" onClick={fetchPosts}>
        {" "}
        click me
      </div>
    </postContext.Provider>
  );
};
