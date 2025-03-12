import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { IData } from "../App";
import { postContext } from "../context/post/Post";

const SinglePost = () => {
  const params = useParams();

  const posts = useContext(postContext);

  const [postData, setPostData] = useState({} as IData);

  const fetchData = (id?: string) => {
    if (id) {
      fetch("http://localhost:3000/posts/" + id)
        .then((response) => response.json())
        .then((data) => {
          setPostData({ ...data });
        })
        .catch((error) => console.log("error", error));
    } else {
      // no Data
    }
  };

  useEffect(() => {
    fetchData(params.post_id);
  }, [params.post_id]);

  useEffect(() => {
    if (typeof postData.views === "number" && params.post_id) {
      console.log("Called");
      const increasedPostData = postData.views + 1;
      posts.updateViews(params.post_id, increasedPostData);
    }
  }, []);

  return (
    <>
      <h1>{params.post_id}</h1>

      <div>
        <p>ID : {postData?.id}</p>
        <p>Views : {postData?.views}</p>
        <p>Name : {postData?.title}</p>
      </div>
    </>
  );
};

export default SinglePost;
