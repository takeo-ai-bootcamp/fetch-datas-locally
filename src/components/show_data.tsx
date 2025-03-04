import { useNavigate } from "react-router";
import { IData } from "../App";

interface IProps {
  posts: Array<IData>;
  updateView: (
    id: string | number,
    new_view: number,
    index: number
  ) => Promise<void>;
}

function ShowData(props: IProps) {
  const navigate = useNavigate();

  const NavigateToIndividualPost = (id: string | number) => {
    navigate("../posts/" + id);
  };
  return (
    <div>
      {props.posts.map((post, index) => {
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
            onClick={() => NavigateToIndividualPost(post.id)}
          >
            <p> id: {post.id}</p>

            <p>Views:{post.views}</p>

            <p>{post.title}</p>
          </div>
        );
      })}
    </div>
  );
}

export default ShowData;
