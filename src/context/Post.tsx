import { createContext, useEffect, useState } from "react";

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
  fetchPosts: () => void;
}

const initialState = {
  data: [] as IData[],
};

export const postContext = createContext({} as IContext);

export const PostContextProvider = ({ children }: IProps) => {
  const [posts, setPosts] = useState([] as IData[]);

  const fetchPosts = () => {
    console.log("called");
    fetch("http://localhost:3000/posts")
      .then((response) => response.json())
      .then((data) => {
        setPosts([...data]);
      })
      .catch((error) => console.log("error", error));
  };

  useEffect(() => {
    console.log("posts", posts);
  }, [posts]);

  return (
    <postContext.Provider value={{ data: posts, fetchPosts }}>
      {children}
    </postContext.Provider>
  );
};
