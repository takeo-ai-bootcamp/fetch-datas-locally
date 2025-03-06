import { useNavigate } from "react-router";
import { IData } from "../App";
import viewicons from "../assets/eye.svg";
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
    <div className="flex flex-wrap gap-2 place-items-center h-full">
      {props.posts.map((post, index) => {
        return (
          <div
            className="card shadow-sm"
            key={index}
            onClick={() => NavigateToIndividualPost(post.id)}
          >
            <div className="card-body">
              <p className="card-title">{post.title}</p>

              <div className="flex justify-between  gap-5 place-items-center">
                <p className="text-lg font-bold ">{post.id}</p>
                <p className="text-xs flex place-items-center gap-1">
                  <img src={viewicons} height="16px" width={"10px"} />
                  {post.views}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ShowData;
