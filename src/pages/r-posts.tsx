import { useSelector, useDispatch } from "react-redux";
import { updatePosts } from "../store/slices/post.slice";

const Posts = () => {
  const post = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  console.log(post, "From the selector");

  return (
    <>
      <h1>{post.data[0].username}</h1>
      <button onClick={() => dispatch(updatePosts())} className="btn">
        {"Clear the post State"}
      </button>
    </>
  );
};

export default Posts;
