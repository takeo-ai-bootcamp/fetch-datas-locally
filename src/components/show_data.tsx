import { useNavigate } from "react-router";
import { IData } from "../App";
import viewicons from "../assets/eye.svg";
import AddData from "./add_data";
import { useContext, useEffect } from "react";
import { postContext } from "../context/Post";
interface IProps {
  posts?: Array<IData>;
  updateView?: (
    id: string | number,
    new_view: number,
    index: number
  ) => Promise<void>;
  addData?: (post: IData) => void;
}

function ShowData(props: IProps) {
  const navigate = useNavigate();
  const posts = useContext(postContext);

  const NavigateToIndividualPost = (id: string | number) => {
    navigate("../posts/" + id);
  };

  const handleAdd = (post: IData) => {
    // props.addData(post);
    document.getElementById("my_modal_2")?.close();
  };

  useEffect(() => {
    posts.fetchPosts();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 h-full justify-center">
      <div className="flex flex-wrap gap-2 h-full w-2/3 justify-center">
        {posts.data.map((post, index) => {
          return (
            <div
              className="card bg-base-100  shadow-sm w-full -center"
              key={index}
              onClick={() => NavigateToIndividualPost(post.id)}
            >
              <figure className="px-10 pt-10">
                {/* {post.image && <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
                className="rounded-xl"
              />} */}
              </figure>
              <div className="card-body">
                <div>
                  <h2 className="card-title">{post.title}</h2>
                </div>
                <p>{post.description}</p>
                <div className="flex gap-2 place-items-center opacity-80">
                  <div className="avatar avatar-placeholder">
                    <div className="bg-neutral text-neutral-content rounded-full">
                      <span className="text-md capitalize p-2">
                        {post.username[0]}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p> {post.username}</p>
                    <p className="text-[10px]"> {new Date().toDateString()}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <AddData addData={handleAdd} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
}

export default ShowData;
