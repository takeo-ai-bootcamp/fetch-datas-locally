import { useContext } from "react";
import { postContext } from "../context/post/Post";

function SimpleComponent() {
  const post = useContext(postContext);

  console.log(post);

  return <> this is a simple component</>;
}

export default SimpleComponent;
